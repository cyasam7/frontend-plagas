import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Typography, TextField, Grid, MenuItem, } from "@material-ui/core";
import Axios from "axios";
import { SuccessButton } from "../components/Buttons";
function Graficas() {
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);
  const [Tipo, setTipo] = useState("");

  const tipos=[
    {
      nombre:"Cebado"
    },
    {
      nombre:"Terrestre"
    },
    {
      nombre:"Insectos"
    },
  ]

  useEffect(() => {
    async function init() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    init().then((empresas) => {
      setEmpresas(empresas);
    });
  },[]);
  return (
    <>
      <Typography align="center" variant="h4">
        Graficas
      </Typography>
      <Grid container justify="center">
        <Grid item xd={12} md={10}>
          <TextField
            label="Empresa o Cliente"
            select
            fullWidth
            value={Empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          >
            {Empresas.map((empresa, index) => (
              <MenuItem key={index} value={empresa._id}>
                {empresa.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <SuccessButton fullWidth>Selecciona</SuccessButton>
        </Grid>
      </Grid>
      <Grid container style={{marginTop: 15}}>
        <Grid item md={10}>
          <Bar
            data={data}
            width={null}
            height={null}
            
          />
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle1" gutterBottom>Tipo de trampa</Typography>
          <TextField
            label="Tipo"
            select
            fullWidth
            value={Tipo}
            onChange={(e)=> setTipo(e.target.value)}
          >
            {tipos.map((tipo, index) =>(
              <MenuItem key={index} value={tipo.nombre}>
                {tipo.nombre}
              </MenuItem>
            ))}
          </TextField>
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
