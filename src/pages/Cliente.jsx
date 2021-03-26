import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Toolbar,
  Button,
  AppBar,
  Grid,
  TextField,
} from "@material-ui/core";
import { useUser } from "../Context/user-context";
import Axios from "axios";
import CardRevision from "../components/CardRevision";
import { useModal } from "../Context/modal-context";
import moment from "moment";
function Cliente() {
  const { setLoading } = useModal();
  const { logOut, user } = useUser();
  const [Revisiones, setRevisiones] = useState([]);
  const [fecha, setFecha] = useState("");
  const [empresa, setEmpresa] = useState("");
  useEffect(() => {
    async function initial() {
      const { data } = await Axios.get(`/empresaContacto/usuario/${user}`);
      return data;
    }
    setLoading(true);
    initial().then((data) => {
      setEmpresa(data.empresa._id);
      setLoading(false);
    });
  }, [setLoading, user]);

  const handleBuscarRevisiones = async () => {
    setLoading(true);
    if (fecha === "") {
      alert("Llenar los datos");
      setLoading(false);
      return;
    }
    const año = moment(fecha).format("YYYYY");
    const mes = moment(fecha).format("MMMMM");
    const newAño = año.substring(1, año.length);
    const newMes = mes.slice(0, -1);
    const { data } = await Axios.get(
      `/revision?mes=${newMes}&ano=${newAño}&empresa=${empresa}`
    );
    setRevisiones(data);
    setLoading(false);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify={"space-between"}>
            <Grid item>
              <Typography variant="h6">Tu historial</Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => logOut()} color="inherit">
                Salir
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Lista
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <TextField
              fullWidth
              value={fecha}
              type="month"
              label=""
              onChange={(e) => setFecha(e.target.value)}
              helperText="Seleccione mes y año"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              onClick={handleBuscarRevisiones}
              variant="contained"
              fullWidth
              color="primary"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          {Revisiones.length > 0 ? (
            <>
              {Revisiones.map((revision, index) => (
                <Grid item md={4}>
                  <CardRevision key={index} revision={revision} />
                </Grid>
              ))}
            </>
          ) : (
            <Grid container justify="center" style={{ marginTop: 20 }}>
              <Grid item>
                <Typography variant="h4" align="center">
                  No hay ninguna revision
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Cliente;
