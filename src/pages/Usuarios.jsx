import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Axios from "axios";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import {
  SuccessButton,
  WarningButton,
  ErrorButton,
} from "../components/Buttons";

function Usuarios() {
  const [openModal, setopenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  const [users, setusers] = useState([]);

  useEffect(() => {
    async function initUsuarios() {
      const data = await Axios.get("/usuarios");
      const usuarios = data.data;
      return usuarios
    }
    setLoading(true);
    initUsuarios()
    .then((usuarios) =>{
      setusers(usuarios);
      setLoading(false);
    })
  }, [user]);

  const handleDelete = (e) => {
    e.preventDefault();
    setLoading(true);
    const URI = `/usuarios/${user}`;
    Axios.delete(URI)
      .then(({ data }) => {
        setopenModal(false);
        setUser("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Lista de Trabajadores
      </Typography>
      <Link to="/usuarios/agregar">
        <SuccessButton
          variant="contained"
          color="secondary"
          startIcon={<Add />}
        >
          Agregar Trabajador
        </SuccessButton>
      </Link>

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
            {users.map((user, index) => (
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
                      setUser(user._id);
                    }}
                  >
                    Eliminar
                  </ErrorButton>
                  <Link to={`/usuarios/editar/${user._id}`}>
                    <WarningButton>Editar</WarningButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        {loading ? (
          <CircularProgress value={75} />
        ) : (
          <>
            <SuccessButton onClick={handleDelete}>Aceptar</SuccessButton>
            <ErrorButton onClick={() => setopenModal(false)}>
              Cancelar
            </ErrorButton>
          </>
        )}
      </Modal>
      
    </>
  );
}

export default Usuarios;
