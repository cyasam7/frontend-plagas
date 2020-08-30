import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import {Link} from 'react-router-dom'
function CardTrabajadores({estacion}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          Tipo: <Typography variant="overline">{estacion.tipo}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Codigo: <Typography variant="overline">{estacion.codigo}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Activa: <Typography variant="overline">{estacion.isActiva.toString()}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Numero: <Typography variant="overline">{estacion.codigo}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/estaciones/editar/${estacion._id}`}>
          <WarningButton>Editar</WarningButton>
        </Link>
        <ErrorButton>Eliminar</ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardTrabajadores;
