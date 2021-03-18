import React, { useState, useEffect } from "react";
import { Grid, TextField, MenuItem, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import Axios from "axios";
import CardRevision from "../components/CardRevision";
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";
import moment from "moment";
function Historial() {
  const { logOut } = useUser();
  const { setLoading } = useModal();
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);
  const [Historial, setHistorial] = useState([]);
  const [Error, setError] = useState(false);
  const [fecha, setFecha] = useState("");

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
  }, [setLoading, logOut]);

  const handleHistorial = async () => {
    setHistorial([]);
    if (Empresa === "" || fecha === "") {
      alert("Llenar los espacios correspondientes");
      setError(true);
      return;
    }
    setLoading(true);
    const año = moment(fecha).format("YYYY");
    const mes = moment(fecha).format("MMMM");
    const { data } = await Axios.get(
      `/revision?empresa=${Empresa}&ano=${año}&mes=${mes}`
    );
    setHistorial(data);
    setError(false);
    setLoading(false);
  };
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
          <SuccessButton onClick={handleHistorial} fullWidth>
            Seleccionar
          </SuccessButton>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={10} xs={12}>
          <TextField
            fullWidth
            value={fecha}
            type="month"
            error={Error}
            label=""
            onChange={(e) => setFecha(e.target.value)}
            helperText="Seleccione mes y año"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 15 }}>
        {Historial.length > 0 ? (
          <>
            {Historial.map((review, index) => (
              <Grid key={index} item md={6}>
                <CardRevision admin revision={review}  />
              </Grid>
            ))}
          </>
        ) : null}
      </Grid>
    </>
  );
}

export default Historial;
