import React from "react";
import {
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ErrorButton, WarningButton} from "../components/Buttons";
function CardTrabajadores({ trabajador, eliminar }) {
    const handleEliminar = (e) =>{
        e.preventDefault();
        eliminar(trabajador.email);
    }
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          Nombre:{" "}
          <Typography variant="overline">{trabajador.nombre}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Apellido:{" "}
          <Typography variant="overline">{trabajador.apellido}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Email: <Typography variant="overline">{trabajador.email}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Telefono:{" "}
          <Typography variant="overline">{trabajador.telefono}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Puesto:{" "}
          <Typography variant="overline">{trabajador.puesto}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Crear Cuenta</Button>
        <ErrorButton onClick={handleEliminar}>Eliminar</ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardTrabajadores;
