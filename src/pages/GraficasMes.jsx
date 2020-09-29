import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Grid, TextField, Button, MenuItem } from "@material-ui/core";
import moment from "moment";
import Axios from "axios";
import { useParams } from "react-router-dom";
function GraficasMes() {
  const { idEmpresa } = useParams();
  const [Mes, setMes] = useState("");
  const [Tipo, setTipo] = useState("");
  const [labels, setLabels] = useState([]);
  const [abejas, setAbejas] = useState([]);
  const [otros, setOtros] = useState([]);
  const [moscas, setMoscas] = useState([]);
  const estations = [
    {
      value: "Roedores",
      label: "Roedores",
    },
    {
      value: "Rastreros",
      label: "Rastreros",
    },
    {
      value: "Voladores",
      label: "Voladores",
    },
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Moscas",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: moscas,
      },
      {
        label: "Abejas",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: abejas,
      },
      {
        label: "Otros",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: otros,
      },
    ],
  };
  const handleBuscar = async () => {
    if (Mes === "") {
      alert("Llenar los datos correctamente");
      return;
    }
    moment().locale("es");
    const mes = moment(Mes).format("MMMM");
    const año = moment(Mes).format("YYYY");
    const { data } = await Axios.post(`/graficas/mes/${idEmpresa}`, {
      mes,
      año,
      tipo: Tipo,
    });
    const labels = data.map((area) => {
      return area.nombre;
    });
    const abejas = data.map((area) => {
      return area.abeja;
    });
    const otros = data.map((area) => {
      return area.otros;
    });
    const mosca = data.map((area) => {
      return area.moscas;
    });
    setLabels(labels);
    setAbejas(abejas);
    setOtros(otros);
    setMoscas(mosca);
  };
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4}>
          <TextField
            fullWidth
            value={Mes}
            type="month"
            label=""
            onChange={(e) => setMes(e.target.value)}
            helperText="Seleccione mes y año"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            select
            label="Selecciona"
            value={Tipo}
            onChange={(e) => setTipo(e.target.value)}
            helperText="Seleccione tipo de estacion"
          >
            {estations.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={2}>
          <Button
            fullWidth
            onClick={handleBuscar}
            variant="contained"
            color="primary"
          >
            Aceptar
          </Button>
        </Grid>
      </Grid>
      <br/>
      <Grid container>
        <Grid item xs={12}>
          <Bar
            data={data}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default GraficasMes;
