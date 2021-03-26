import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  DialogActions,
  Button,
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
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";
import Swal from "sweetalert2";
import axios from "axios";
function Usuarios() {
  const { logOut } = useUser();
  const { setLoading } = useModal();
  const [openModal, setopenModal] = useState(false);
  const [user, setUser] = useState("");
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function initUsuarios() {
      const data = await Axios.get(
        "/usuarios?tipo_usuario=Gerente&tipo_usuario=Supervisor&tipo_usuario=Tecnico&isTrabajando=true"
      );
      const usuarios = data.data;
      return usuarios;
    }
    setLoading(true);
    initUsuarios()
      .then((usuarios) => {
        setusers(usuarios);
      })
      .catch(() => {
        logOut();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, logOut]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await Axios.delete(`/usuarios/${user}`);
    const newUsers = users.filter((usr) => usr._id !== user);
    setusers(newUsers);
    setopenModal(false);
    setUser({});
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
      await axios.patch(`/usuarios/password/${idUsuario}`, {
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
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Lista de Trabajadores
      </Typography>
      <Box textAlign="end">
        <Link to="/usuarios/agregar">
          <SuccessButton
            variant="contained"
            color="secondary"
            startIcon={<Add />}
          >
            Agregar Trabajador
          </SuccessButton>
        </Link>
      </Box>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCambiarPassword(user._id)}
                  >
                    Cambio de Contraseña
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal abierto={openModal} titulo="¿Seguro que desea Eliminar?">
        <DialogActions>
          <ErrorButton onClick={() => setopenModal(false)}>
            Cancelar
          </ErrorButton>
          <SuccessButton onClick={handleDelete}>Aceptar</SuccessButton>
        </DialogActions>
      </Modal>
    </>
  );
}

export default Usuarios;
