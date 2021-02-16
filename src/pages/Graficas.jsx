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
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";

function Graficas() {
  const { logOut } = useUser();
  const history = useHistory();
  const { setLoading } = useModal();
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);

  useEffect(() => {
    async function init() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    setLoading(true);
    init()
      .then((empresas) => {
        setEmpresas(empresas);
        setLoading(false);
      })
      .catch(() => {
        logOut();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading,logOut]);
  const handleMes = () => {
    if (Empresa === "") {
      alert("Campos Vacios");
      return;
    }
    history.push(`/graficas/mes/${Empresa}`);
  };
  const handleAnualArea = () => {
    if (Empresa === "") {
      alert("Campos Vacios");
      return;
    }
    history.push(`/graficas/año/area/${Empresa}`);
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
      <Grid item xs={12}>
          <Button
            onClick={handleMes}
            variant="contained"
            color="primary"
            fullWidth
          >
            Grafica Mensual
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleAnualArea}
            variant="contained"
            color="primary"
            fullWidth
          >
            Graficas Comparaciones por Años y Areas de Voladores
          </Button>
        </Grid>
        <Grid item xs={12}>
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

export default Graficas;
