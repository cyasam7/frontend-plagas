import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
function CardRevision({ revision }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">
          Encargado:{" "}
          <Typography variant="overline">{`${revision.encargado.nombre} ${revision.encargado.apellido}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Trabajador:{" "}
          <Typography variant="overline">{`${revision.usuario.nombre} ${revision.usuario.apellido}`}</Typography>
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
          Numero de Areas:{" "}
          <Typography variant="overline">{revision.areas.length}</Typography>
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
        <Button variant="contained" color="primary">
          Descargar reporte
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardRevision;
