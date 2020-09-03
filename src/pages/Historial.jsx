import React, { useState, useEffect } from "react";
import { Grid, TextField, MenuItem, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import Axios from "axios";
import CardRevision from "../components/CardRevision";
function Historial() {
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);
  const [TipoTrampa, setTipoTrampa] = useState("");
  const [Historial, setHistorial] = useState([]);
  const [Error, setError] = useState(false);
  useEffect(() => {
    async function init() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    init().then((empresas) => {
      setEmpresas(empresas);
    });
  }, []);

  const handleHistorial = async () => {
    setHistorial([]);
    if (TipoTrampa === "" || Empresa === "") {
      alert("Llenar los espacios correspondientes");
      setError(true);
      return;
    }
    let URI = "";
    if (TipoTrampa === "Todos") {
      URI = "/historial";
    } else if (TipoTrampa === "Cebado") {
      URI = `/cebado?empresa=${Empresa}`;
    } else if (TipoTrampa === "Terrestre") {
      URI = `/terrestre?empresa=${Empresa}`;
    } else if (TipoTrampa === "Insectos") {
      URI = `/insectos?empresa=${Empresa}`;
    }
    const resp = await Axios.get(URI);
    setHistorial(resp.data);
    setError(false);
  };
  const tipo = ["Todos", "Cebado", "Terrestre", "Insectos"];
  return (
    <>
      <Typography variant="subtitle2">Historial de Empresa</Typography>
      <Grid container spacing={1}>
        <Grid item md={10} xs={12}>
          <TextField
            fullWidth
            select
            error={Error}
            label="Empresa o cliente"
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
        <Grid item md={2} xs={12}>
          <TextField
            select
            label="Tipo de Trampa"
            fullWidth
            error={Error}
            value={TipoTrampa}
            onChange={(e) => setTipoTrampa(e.target.value)}
          >
            {tipo.map((titulo, index) => {
              return (
                <MenuItem key={index} value={titulo}>
                  {titulo}
                </MenuItem>
              );
            })}
          </TextField>
          <SuccessButton onClick={handleHistorial} fullWidth>
            Seleccionar
          </SuccessButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {Historial.length > 0 ? (
          <>
            {Historial.map((review, index) => (
              <Grid key={index} item md={6}>
                <CardRevision revision={review} />
              </Grid>
            ))}
          </>
        ) : (
          <Typography>-Selecciona alguna empresa o cliente-</Typography>
        )}
      </Grid>
    </>
  );
}

export default Historial;
