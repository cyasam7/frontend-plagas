import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
} from "@material-ui/core";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Graficas() {
  const history = useHistory();
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);
  
  useEffect(() => {
    async function init() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    init().then((empresas) => {
      setEmpresas(empresas);
    });
  }, []);
  const handleMes = () => {
    if (Empresa === "") {
      alert("Campos Vacios");
      return;
    }
    history.push(`/graficas/mes/${Empresa}`);
  };
  const handleAnual = () => {
    if (Empresa === "") {
      alert("Campos Vacios");
      return;
    }
    history.push(`/graficas/anual/${Empresa}`);
  };
  return (
    <>
      <Typography align="center" variant="h4">
        Graficas
      </Typography>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Empresa"
            helperText="Selecciona el nombre de la empresa o cliente"
            value={Empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          >
            {Empresas.map((option, index) => (
              <MenuItem key={index} value={option._id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            onClick={handleMes}
            variant="contained"
            color="primary"
            fullWidth
          >
            Grafica Mensual
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            onClick={handleAnual}
            variant="contained"
            color="primary"
            fullWidth
          >
            Grafica Anual
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const data = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My second dataset",
      backgroundColor: "rgba(155,231,91,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [45, 79, 10, 41, 16, 85, 20],
    },
  ],
};
export default Graficas;
