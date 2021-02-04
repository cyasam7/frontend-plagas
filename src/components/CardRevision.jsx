import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
function CardRevision({ revision }) {
  const handleDescargar = () =>{
    console.log(revision)
    window.open(`https://ellaurelrd.com/api/revision/pdf/${revision.folio}`)
  }
  
  return (
    <Card>
      <CardContent>
      <Typography variant="subtitle2">
          ID:{" "}
          <Typography variant="overline">{`${revision.folio}`}</Typography>
        </Typography>
        <Typography variant="subtitle2">
          Aval: <Typography variant="overline">{`${revision.aval}`}</Typography>
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
        <Button onClick={handleDescargar} variant="contained" color="primary">
          Descargar el reporte
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardRevision;
