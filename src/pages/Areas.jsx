import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  TextField,
  Grid,
  MenuItem,
} from "@material-ui/core";
import CardArea from "../components/CardArea";
import { SuccessButton, ErrorButton } from "../components/Buttons";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";

function Areas() {
  const { logOut } = useUser();
  const { setLoading } = useModal();
  const [Empresas, setEmpresas] = useState([]);
  const [Empresa, setEmpresa] = useState("");

  const [Areas, setAreas] = useState([]);
  const [Area, setArea] = useState("");

  const [OpenModal, setOpenModal] = useState(false);
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
  }, [setLoading,logOut]);

  const handleBuscar = () => {
    if (Empresa === "") {
      seterror(true);
      return;
    }
    setbuscado(true);
    setLoading(true);
    Axios.get(`/area?empresa=${Empresa}&borrado=false`).then(({ data }) => {
      setAreas(data);
      setLoading(false);
    });
  };
  const openModalEliminar = (id) => {
    setArea(id);
    setOpenModal(true);
  };

  const handleEliminar = () => {
    Axios.delete(`/area/${Area}`).then(() => {
      const newAreas = Areas.filter((area) => area._id !== Area);
      setAreas(newAreas);
      setArea({});
      setOpenModal(false);
    });
  };
  return (
    <Container>
      <Modal abierto={OpenModal} titulo="¿Seguro que desea Eliminar?">
        <>
          <SuccessButton onClick={handleEliminar}>Aceptar</SuccessButton>
          <ErrorButton onClick={() => setOpenModal(false)}>
            Cancelar
          </ErrorButton>
        </>
      </Modal>
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
                    <CardArea area={area} eliminar={openModalEliminar} />
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
