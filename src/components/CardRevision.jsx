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
<<<<<<< HEAD
    window.open(`https://ellaurelrd.com/api/revision/pdf/${revision.folio}`)
=======
    window.open(`https://157.245.242.243:4000/api/revision/pdf/${revision.folio}`)
>>>>>>> 665e0ef9255a86eef6abc63adcf61b4071a60e71
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
          Descargar reporte
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardRevision;
