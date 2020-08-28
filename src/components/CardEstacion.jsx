import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import {Link} from 'react-router-dom'
function CardTrabajadores() {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          Tipo: <Typography variant="overline">Tipo</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Codigo: <Typography variant="overline">Codigo</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Activa: <Typography variant="overline">Falso</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Numero: <Typography variant="overline">50</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/estaciones/editar/1`}>
          <WarningButton>Editar</WarningButton>
        </Link>
        <ErrorButton>Eliminar</ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardTrabajadores;
