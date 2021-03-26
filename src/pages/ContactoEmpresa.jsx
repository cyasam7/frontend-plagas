import React, { useEffect, useState } from "react";
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
  Button,
} from "@material-ui/core";
import {
  ErrorButton,
  WarningButton,
  SuccessButton,
} from "../components/Buttons";
import Modal from "../components/Modal";
import { useModal } from "../Context/modal-context";
import Axios from "axios";
import Swal from "sweetalert2";

function ContactoEmpresa() {
  const { setLoading } = useModal();
  const { idEmpresa } = useParams();
  const [usuarios, setUsuarios] = useState([]);
  const [empresaContacto, setEmpresaContacto] = useState("");
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/empresaContacto?empresa=${idEmpresa}`);
      return data;
    }
    setLoading(true);
    initial().then((data) => {
      setUsuarios(data);
      setLoading(false);
    });
  }, [idEmpresa, setLoading]);

  const handleDeleteContactoEmpresa = async () => {
    setLoading(true);
    try {
      await Axios.delete(`/empresaContacto/${empresaContacto}`);
      const newUsuarios = usuarios.filter(
        (user) => user._id !== empresaContacto
      );
      setUsuarios(newUsuarios);
      setEmpresaContacto("");
    } catch (error) {
    } finally {
      setLoading(false);
      setopenModal(false);
    }
  };
  const handleCambiarPassword = async (idUsuario) => {
    const { value: formValues, isConfirmed } = await Swal.fire({
      title: "Cambio de contraseña",
      html:
        '<input id="swal-input1" type="password" placeholder="Contraseña" class="swal2-input">' +
        '<input id="swal-input2" type="password" placeholder="Confirmar" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });
    if (isConfirmed) {
      if (formValues[0] !== formValues[1]) {
        await Swal.fire({
          title: "Contraseñas no son iguales",
          text: "Volver a intentar con contraseñas iguales",
          icon: "error",
        });
        return;
      }
      await Axios.patch(`/usuarios/password/${idUsuario}`, {
        idUsuario,
        password: formValues[0],
      });
      Swal.fire({
        title: "Correcto",
        text: "Se actualizo correctamente la contraseña",
        icon: "success",
      });
    }
  };
  return (
    <>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        <>
          <ErrorButton onClick={() => setopenModal(false)}>
            Cancelar
          </ErrorButton>
          <SuccessButton onClick={handleDeleteContactoEmpresa}>
            Aceptar
          </SuccessButton>
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
                  <TableCell>{user.usuario.nombre}</TableCell>
                  <TableCell>{user.usuario.apellido}</TableCell>
                  <TableCell>{user.usuario.email}</TableCell>
                  <TableCell>{user.usuario.telefono}</TableCell>
                  <TableCell>{user.usuario.tipo_usuario}</TableCell>
                  <TableCell>
                    <ErrorButton
                      onClick={() => {
                        setopenModal(true);
                        setEmpresaContacto(user.usuario._id);
                      }}
                    >
                      Eliminar
                    </ErrorButton>
                    <Link to={`/empresas/editar/contacto/${user.usuario._id}`}>
                      <WarningButton>Editar</WarningButton>
                    </Link>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleCambiarPassword(user.usuario._id)}
                    >
                      Cambio de Contraseña
                    </Button>
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
