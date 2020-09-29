import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Grid,
} from "@material-ui/core";
import {
  ErrorButton,
  WarningButton,
  SuccessButton,
} from "../components/Buttons";
import Modal from "../components/Modal";
import { useModal } from "../Context/modal-context";
import Axios from "axios";

function ContactoEmpresa() {
  const { setLoading } = useModal();
  const { idEmpresa } = useParams();
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/empresaContacto?empresa=${idEmpresa}`);
      return data;
    }
    setLoading(true);
    initial().then((data) => {
      const usuarios = data.map((empresa) => empresa.usuario);
      setUsuarios(usuarios);
      setLoading(false);
    });
  }, []);

  const handleDeleteContactoEmpresa = async () => {
    setLoading(true);
    try {
      await Axios.delete(`/empresaContacto/${usuario}`);
      const newUsuarios = usuarios.filter((user) => user._id !== usuario);
      setUsuarios(newUsuarios);
      setUsuario("");
    } catch (error) {
    } finally {
      setLoading(false);
      setopenModal(false);
    }
  };

  return (
    <>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        <>
          <SuccessButton onClick={handleDeleteContactoEmpresa}>
            Aceptar
          </SuccessButton>
          <ErrorButton onClick={() => setopenModal(false)}>
            Cancelar
          </ErrorButton>
        </>
      </Modal>
      <Typography align="center" variant="h4" gutterBottom>
        Contactos
      </Typography>
      {usuarios.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Tipo Usuario</TableCell>
                <TableCell>Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.nombre}</TableCell>
                  <TableCell>{user.apellido}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.telefono}</TableCell>
                  <TableCell>{user.tipo_usuario}</TableCell>
                  <TableCell>
                    <ErrorButton
                      onClick={() => {
                        setopenModal(true);
                        setUsuario(user._id);
                      }}
                      fullWidth
                    >
                      Eliminar
                    </ErrorButton>
                    <Link to={`/empresas/editar/contacto/${user._id}`}>
                      <WarningButton fullWidth>Editar</WarningButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Grid container justify="center">
            <Typography variant="h6">No tienes ningun trabajador</Typography>
          </Grid>
        </>
      )}
    </>
  );
}

export default ContactoEmpresa;
