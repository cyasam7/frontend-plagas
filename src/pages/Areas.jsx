import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  TextField,
  Grid,
  MenuItem,
} from "@material-ui/core";
import CardArea from "../components/CardArea";
import { SuccessButton} from "../components/Buttons";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";
import Swal from "sweetalert2";

function Areas() {
  const { logOut } = useUser();
  const { setLoading } = useModal();
  const [Empresas, setEmpresas] = useState([]);
  const [Empresa, setEmpresa] = useState("");

  const [Areas, setAreas] = useState([]);

  const [buscado, setbuscado] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    async function initialAreas() {
      const { data } = await Axios.get("/empresa");
      return data;
    }
    setLoading(true);
    initialAreas()
      .then((empresas) => {
        setEmpresas(empresas);
      })
      .catch(() => {
        logOut();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, logOut]);

  const handleBuscar = () => {
    if (Empresa === "") {
      seterror(true);
      return;
    }
    setbuscado(true);
    setLoading(true);
    Axios.get(`/area?empresa=${Empresa}`).then(({ data }) => {
      setAreas(data);
      setLoading(false);
    });
  };

  const handleEliminar = (areaId) => {
    Swal.fire({
      icon: "question",
      title: "¿Desea eliminar el area?",
      showCancelButton: true,
    }).then(async ({ isConfirmed }) => {
      if (isConfirmed) {
        await Axios.delete(`/area/${areaId}`);
        await Swal.fire({
          title: "Se ha borrado el area correctamente",
          icon: "success",
        });
        const newAreas = Areas.filter((area) => area._id !== areaId);
        setAreas(newAreas);
      } else {
        await Swal.fire({
          title: "No se borro el area",
          icon: "error",
        });
      }
    });
  };
  return (
    <Container>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Areas
      </Typography>
      <Grid alignItems="center" justify="center" container>
        <Grid xs={12} item md={10}>
          <TextField
            fullWidth
            select
            label="Empresa"
            helperText="Selecciona el nombre de la empresa o cliente"
            error={error}
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
        <Grid xs={12} item md={2}>
          <SuccessButton onClick={handleBuscar} fullWidth>
            Buscar
          </SuccessButton>
        </Grid>
      </Grid>
      {buscado ? (
        <>
          <Grid container alignItems="center" justify="flex-end">
            <Grid item xs={12} md={2}>
              <Link to={{ pathname: "/areas/agregar", state: { Empresa } }}>
                <SuccessButton fullWidth>Agregar</SuccessButton>
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Areas.length > 0 ? (
              <>
                {Areas.map((area, index) => (
                  <Grid key={index} item xs={12} md={4}>
                    <CardArea area={area} eliminar={handleEliminar} />
                  </Grid>
                ))}
              </>
            ) : (
              <Typography align="center">No hay areas asignadas</Typography>
            )}
          </Grid>
        </>
      ) : null}
    </Container>
  );
}
export default Areas;
