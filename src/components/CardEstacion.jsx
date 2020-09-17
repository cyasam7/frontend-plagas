import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import {QRCode} from "react-qr-svg";

function CardTrabajadores({ estacion, handle }) {
  const handleOpen = () =>{
    handle(estacion._id)
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="subtitle2">
              Tipo: <Typography variant="overline">{estacion.tipo}</Typography>
            </Typography>
            <Typography variant="subtitle2">
              Codigo:{" "}
              <Typography variant="overline">{estacion.codigo}</Typography>
            </Typography>
            <Typography variant="subtitle2">
              Activa:{" "}
              <Typography variant="overline">
                {estacion.isActiva.toString()}
              </Typography>
            </Typography>
            <Typography variant="subtitle2">
              Numero:{" "}
              <Typography variant="overline">{estacion.codigo}</Typography>
            </Typography>
          </Grid>
          <Grid item md={6}>
          <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                value={estacion._id}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link to={`/estaciones/editar/${estacion._id}`}>
          <WarningButton>Editar</WarningButton>
        </Link>
        <ErrorButton onClick={handleOpen}>Eliminar</ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardTrabajadores;
