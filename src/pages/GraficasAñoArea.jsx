import React, { useState } from "react";
import { Grid, TextField, MenuItem, Button } from "@material-ui/core";
import { useModal } from "../Context/modal-context";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ContainerTablaAreaAnual from "../components/ContainerTablaAreaAnual";
import "chartjs-plugin-datalabels";
function GraficasAñoAnual() {
  const { setLoading } = useModal();
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
    setLoading(true);
    const { data } = await Axios.post(`/graficas/ano/area/${idEmpresa}`, {
      tipo: Tipo,
    });
    setLoading(false);
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
      </Grid>
      <Grid container>
        <PDFExport
          paperSize="letter"
          margin="0.2cm"
          scale={0.4}
          fileName={`reporte-anual`}
          ref={(component) => (pdfExportComponent = component)}
        >
          <Grid container>
            <Grid>
              <Button></Button>
            </Grid>
            <Grid item xs={12}>
              {revisiones.length > 0 && (
                <>
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
                  {revisiones.map((revision, index) => (
                    <ContainerTablaAreaAnual
                      tipo={Tipo}
                      key={index}
                      revision={revision}
                    />
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </PDFExport>
      </Grid>
    </>
  );
}

export default GraficasAñoAnual;
