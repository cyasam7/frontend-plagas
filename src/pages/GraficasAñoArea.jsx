import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useModal } from "../Context/modal-context";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ContainerTablaAreaAnual from "../components/ContainerTablaAreaAnual";
import "chartjs-plugin-datalabels";
import Swal from "sweetalert2";
function GraficasAñoAnual() {
  const { setLoading } = useModal();
  const [revisiones, setRevisiones] = useState([]);
  const { idEmpresa } = useParams();
  const [primerAño, setPrimerAño] = useState("");
  const [segundoAño, setSegundoAño] = useState("");
  let pdfExportComponent;
  const años = [
    "",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const handleBuscar = async () => {
    if (primerAño === "" || segundoAño === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos vacios",
      });
      return;
    }if(primerAño == segundoAño){
      Swal.fire({
        icon: "warning",
        title: "Campos iguales",
      });
      return;
    }
    setLoading(true);
    const { data } = await Axios.post(`/graficas/ano/area/${idEmpresa}`, {
      tipo: "Voladores",
      primerAño,
      segundoAño,
    });
    setLoading(false);
    setRevisiones(data);
  };
  return (
    <>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={2}
        style={{ marginBottom: 7 }}
      >
        <Grid item xs={12} md={4}>
          <TextField
            select
            label="Primer año"
            value={primerAño}
            onChange={(e) => {
              setRevisiones([]);
              setPrimerAño(e.target.value);
            }}
            helperText="Seleccione el primer año"
          >
            {años.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            select
            label="Segundo año"
            value={segundoAño}
            onChange={(e) => {
              setRevisiones([]);
              setSegundoAño(e.target.value);
            }}
            helperText="Seleccione el segundo año"
          >
            {años.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
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
        <Grid container justify="center">
          {revisiones.length > 0 && (
            <>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={() => pdfExportComponent.save()}
                >
                  Generar archivo
                </Button>
              </Grid>

              <Grid item xs={12} md={12} lg={10} xl={8}>
                <PDFExport
                  paperSize="letter"
                  margin={{left: "1cm", right: "1cm", bottom:"5mm"}}
                  scale={0.5}
                  fileName={`reporte-anual-por-areas-voladores`}
                  ref={(component) => (pdfExportComponent = component)}
                >
                  <ContainerTablaAreaAnual
                    revision={revisiones}
                    primerAño={primerAño}
                    segundoAño={segundoAño}
                  />
                </PDFExport>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default GraficasAñoAnual;
