import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Axios from "axios";
import Modal from "../components/Modal";
import {Link} from 'react-router-dom'
import {SuccessButton, WarningButton , ErrorButton} from '../components/Buttons'

function Usuarios() {
  const [openModal, setopenModal] = useState(false);
  const [user, setUser] = useState("");

  const [users, setusers] = useState([]);

  useEffect(() => {
    async function initUsuarios() {
      const data = await Axios.get("http://localhost:4000/usuarios");
      const usuarios = data.data;
      setusers(usuarios);
    }
    initUsuarios();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    const URI = `http://localhost:4000/usuarios/${user}`;
    console.log(URI);
    Axios.delete(URI)
      .then(({ data }) => {
        console.log(data);
        setopenModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Lista de Trabajadores
      </Typography>
      <Link to="/usuarios/agregar">
        <SuccessButton variant="contained" color="secondary" startIcon={<Add />}>
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
            {users.map((user) => (
              <TableRow key={user._id}>
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
                    variant="contained"
                  >
                    Eliminar
                  </ErrorButton>
                  <WarningButton>
                    <Link to={`/usuarios/editar/${user._id}` }>Editar</Link>
                  </WarningButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        <Button onClick={handleDelete}>Aceptar</Button>
        <Button onClick={() => setopenModal(false)}>Cancelar</Button>
      </Modal>
    </>
  );
}

export default Usuarios;
