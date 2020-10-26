import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { PDFExport } from "@progress/kendo-react-pdf";
import Axios from "axios";
import ContainerTablaAreaAnual from "../components/ContainerTablaAreaAnual";
import { useParams } from "react-router-dom";
import "chartjs-plugin-datalabels";

function GraficasAñoAnual() {
  const [revisiones, setRevisiones] = useState([]);
  const { idEmpresa } = useParams();
  const [Tipo, setTipo] = useState("");
  let pdfExportComponent;
  const valores = [
    {
      value: "Rastreros",
      label: "Rastreros",
    },
    {
      value: "Voladores",
      label: "Voladores",
    },
  ];
  const handleBuscar = async () => {
    const { data } = await Axios.post(`/graficas/ano/area/${idEmpresa}`, {
      tipo: Tipo,
    });
    setRevisiones(data);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginBottom: 15 }}
      >
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            select
            label="Selecciona"
            value={Tipo}
            onChange={(e) => {
              setRevisiones([]);
              setTipo(e.target.value);
            }}
            helperText="Seleccione tipo de estacion"
          >
            {valores.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={handleBuscar}
            variant="contained"
            color="primary"
            fullWidth
          >
            Aceptar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            color="primary"
            onClick={() => {
              if (Tipo === "") {
                alert("Campo vacio");
                return;
              }
              pdfExportComponent.save();
            }}
          >
            Generar archivo
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <PDFExport
          paperSize="A4"
          scale={0.7}
          margin=".5cm"
          fileName={`reporte-anual`}
          landscape={true}
          ref={(component) => (pdfExportComponent = component)}
        >
          <Grid container>
            <Grid>
              <Button></Button>
            </Grid>
            <Grid item xs={12}>
              {revisiones.length > 0 ? (
                <>
                  {revisiones.map((revision, index) => (
                    <>
                      <ContainerTablaAreaAnual
                        tipo={Tipo}
                        key={index}
                        revision={revision}
                      />
                      <hr />
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  ))}
                </>
              ) : null}
            </Grid>
          </Grid>
        </PDFExport>
      </Grid>
    </>
  );
}

export default GraficasAñoAnual;
