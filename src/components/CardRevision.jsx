import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
function CardRevision({ revision }) {
  console.log(revision);
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          Trabajador:{" "}
          <Typography variant="overline">{`${revision.usuario.nombre} ${revision.usuario.apellido}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Encargado:{" "}
          <Typography variant="overline">{`${revision.encargado.nombre} ${revision.encargado.apellido}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Aval: <Typography variant="overline">{`${revision.aval}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Empresa:{" "}
          <Typography variant="overline">{revision.empresa.nombre}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          noCliente:{" "}
          <Typography variant="overline">
            {revision.empresa.noCliente}
          </Typography>
        </Typography>
        <Typography variant="subtitle2">
          Area:{" "}
          <Typography variant="overline">{revision.area.nombre}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Codigo Estacion:{" "}
          <Typography variant="overline">{revision.estacion.codigo}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Tipo de Estacion:{" "}
          <Typography variant="overline">{revision.estacion.tipo}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Fecha:{" "}
          <Typography variant="overline">{`${revision.dia} ${revision.mes} ${revision.año}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Hora que inicio:
          <Typography variant="overline">{revision.horaInicio}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Hora que termino:
          <Typography variant="overline">{revision.horaTermino}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/estaciones/editar/${revision._id}`}>
          <Button variant="contained" color="primary">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardRevision;
