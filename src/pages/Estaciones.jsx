import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography, MenuItem, Button } from "@material-ui/core";
import { SuccessButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import CardEstacion from "../components/CardEstacion";
import Axios from "axios";
import { useModal } from "../Context/modal-context";
import { useUser } from "../Context/user-context";
import DescripcionEstaciones from "../components/DescripcionEstaciones";
import Swal from "sweetalert2";
import axios from "axios";
function Estaciones() {
    const { logOut } = useUser();
    const { setLoading } = useModal();
    const [Clientes, setClientes] = useState([]);
    const [Areas, setAreas] = useState([]);
    const [Estaciones, setEstaciones] = useState([]);
    const [buscar, setBuscar] = useState(false);
    const [Cliente, setCliente] = useState("");
    const [Area, setArea] = useState("");

    const [term, setTerm] = useState("");

    useEffect(() => {
        async function initial() {
            const { data } = await Axios.get("/empresa");
            return data;
        }
        setLoading(true);
        initial()
            .then((resp) => {
                setClientes(resp);
            })
            .catch(() => {
                logOut();
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setLoading, logOut]);

    const handleSearchEstacion = (term) => {
        return function (x) {
            return x.numero === term || !term;
        };
    };
    const handleListAreas = () => {
        if (Cliente === "") {
            alert("Un espacio vacio");
            return;
        }
        Axios.get(`/area?empresa=${Cliente}`).then(({ data }) => {
            setAreas(data);
        });
    };
    const handleListEstaciones = async () => {
        if (Cliente === "" || Area === "") {
            alert("Espacios Vacios");
            return;
        }
        setLoading(true);
        const { data } = await Axios.get(`/estacion?empresa=${Cliente}&area=${Area}`);
        setBuscar(true);
        setEstaciones(data);
        setLoading(false);
    };
    const handleDeleteEstacion = (estacionEliminar) => {
        Swal.fire({
            title: "¿Desea Eliminar la estacion?",
            icon: "question",
            showCancelButton: true,
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                await Axios.delete(`/estacion/${estacionEliminar}`);
                await Swal.fire({
                    title: "Se elimino correctamente",
                    icon: "success",
                });
                const newAreas = Estaciones.filter((estacion) => estacion._id !== estacionEliminar);
                setEstaciones(newAreas);
            } else {
                Swal.fire({
                    title: "No se cancelo la estacion",
                    icon: "error",
                });
            }
        });
    };
    const handleCambiarEstacion = (estacion) => {
        let options = {};
        Areas.map((area) => {
            return (options[area._id] = area.nombre);
        });
        Swal.fire({
            title: "Cambiar de area",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Selecciona el area",
            showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === "") {
                        resolve("Selecciona alguna area");
                    } else {
                        resolve();
                    }
                });
            },
        }).then(async ({ value, isConfirmed }) => {
            if (isConfirmed) {
                if (Area === value) {
                    await Swal.fire({
                        title: "La estacion ya pertenece a la estacion que elegiste.",
                        icon: "question",
                    });
                    return;
                }
                estacion.area = value;
                estacion.empresa = estacion.empresa._id;
                await axios.patch(`/estacion/${estacion._id}`, estacion);
                await Swal.fire({
                    title: "Se hizo el movimiento de estacion",
                    icon: "success",
                });
                const newEstaciones = Estaciones.filter((est) => est._id !== estacion._id);
                setEstaciones(newEstaciones);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Se cancelo el movimiento",
                });
            }
        });
    };
    return (
        <>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
                Estaciones
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={10}>
                    <TextField
                        fullWidth
                        select
                        label="Empresa"
                        helperText="Selecciona el nombre de la empresa o cliente"
                        value={Cliente}
                        onChange={(e) => {
                            setAreas([]);
                            setBuscar(false);
                            setCliente(e.target.value);
                        }}
                    >
                        {Clientes.map((option, index) => (
                            <MenuItem key={index} value={option._id}>
                                {option.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={2}>
                    <SuccessButton fullWidth onClick={handleListAreas}>
                        Buscar
                    </SuccessButton>
                </Grid>
            </Grid>

            {Areas.length > 0 && (
                <Grid container spacing={1}>
                    <Grid item xs={12} md={10}>
                        <TextField
                            fullWidth
                            select
                            label="Area"
                            helperText="Selecciona el nombre del area para ver lista de estaciones"
                            value={Area}
                            onChange={(e) => {
                                setBuscar(false);
                                setArea(e.target.value);
                            }}
                        >
                            {Areas.map((option, index) => (
                                <MenuItem key={index} value={option._id}>
                                    {option.nombre}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <SuccessButton onClick={handleListEstaciones} fullWidth>
                            Buscar
                        </SuccessButton>
                    </Grid>
                </Grid>
            )}
            {buscar && (
                <>
                    <Link
                        to={{
                            pathname: "/estaciones/agregar",
                            state: { Empresa: Cliente, Area },
                        }}
                    >
                        <SuccessButton fullWidth>Agregar</SuccessButton>
                    </Link>
                    <br />
                    <br />
                    <Grid container spacing={5}>
                        {Estaciones.length > 0 ? (
                            <>
                                <Grid item xs={12}>
                                    <Link to={`/QRList/${Cliente}/${Area}`}>
                                        <Button variant="outlined" color="primary" fullWidth>
                                            Generar PDF de QR's
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align="center" variant="h5" gutterBottom>
                                        Lista de estaciones
                                    </Typography>
                                </Grid>
                                <DescripcionEstaciones estaciones={Estaciones} />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    helperText="Busca por numero de estacion"
                                    placeholder="Numero de dispositivo"
                                    label="Busca por numero de estacion"
                                    fullWidth
                                    value={term}
                                    onChange={(texto) => setTerm(texto.target.value)}
                                />
                                {Estaciones.filter(handleSearchEstacion(term)).map(
                                    (estacion, index) => (
                                        <Grid key={index} item xs={12} md={6}>
                                            <CardEstacion
                                                eliminar={handleDeleteEstacion}
                                                estacion={estacion}
                                                cambiar={handleCambiarEstacion}
                                            />
                                        </Grid>
                                    )
                                )}
                            </>
                        ) : (
                            <Grid container justify="center" style={{ marginTop: 15 }}>
                                <Grid item>
                                    <Typography variant="subtitle2">
                                        No hay ninguna estacion en esta area
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </>
            )}
        </>
    );
}

export default Estaciones;
