import React, { useState, useEffect } from "react";
import { Grid, TextField, MenuItem, Typography } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import Axios from "axios";
import CardRevision from "../components/CardRevision";
import { useModal } from "../Context/modal-context";

function Historial() {
  const { setLoading } = useModal();
  const [Empresa, setEmpresa] = useState("");
  const [Empresas, setEmpresas] = useState([]);
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
    if ( Empresa === "") {
      alert("Llenar los espacios correspondientes");
      setError(true);
      return;
    }
    setLoading(true);
    const {data} = await Axios.get(`/revision?empresa=${Empresa}`);
    setHistorial(data)
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
      <Grid container spacing={2} style={{marginTop: 15}}>
        {Historial.length > 0 ? (
          <>
            {Historial.map((review, index) => (
              <Grid key={index} item md={6}>
                <CardRevision revision={review} />
              </Grid>
            ))}
          </>
        ) : (
          null
        )}
      </Grid>
    </>
  );
}

export default Historial;
