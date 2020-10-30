import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import { PDFExport } from "@progress/kendo-react-pdf";
function CardTrabajadores({ estacion, handle }) {
  let pdfExportComponent;
  const handleOpen = () => {
    handle(estacion._id);
  };
  return (
    <Card>
      <CardContent>
        <PDFExport
          paperSize="A4"
          scale={0.7}
          margin="1cm"
          fileName="estacion"
          landscape={true}
          ref={(component) => (pdfExportComponent = component)}
        >
          <Grid container>
            <Grid item md={6}>
              <Typography variant="subtitle2">
                Tipo:{" "}
                <Typography variant="overline">{estacion.tipo}</Typography>
              </Typography>
              <Typography variant="subtitle2">
                Codigo:{" "}
                <Typography variant="overline">{estacion._id}</Typography>
              </Typography>
              <Typography variant="subtitle2">
                Activa:{" "}
                <Typography variant="overline">
                  {estacion.isActiva.toString()}
                </Typography>
              </Typography>
              <Typography variant="subtitle2">
                Numero:{" "}
                <Typography variant="overline">{estacion.numero}</Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                size="150"
                level="Q"
                renderAs="canvas"
                value={estacion._id}
              />
            </Grid>
          </Grid>
        </PDFExport>
      </CardContent>
      <CardActions>
        <Link to={`/estaciones/editar/${estacion._id}`}>
          <WarningButton>Editar</WarningButton>
        </Link>
        <ErrorButton onClick={handleOpen}>Eliminar</ErrorButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => pdfExportComponent.save()}
        >
          Generar QR
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardTrabajadores;
