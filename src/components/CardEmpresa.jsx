import React from "react";
import { Card, CardContent, CardActions, Typography, makeStyles, Button } from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const useStyles = makeStyles({
    subtitle: {
        marginBottom: 12,
    },
});

function CardEmpresa({ empresa, eliminar, contactos }) {
    const styles = useStyles();

    const handleEliminar = () => {
        eliminar(empresa._id);
    };

    const handleAddContactExist = () => {
        let options = {};

        contactos.forEach((element) => {
            options[element._id] = `${element.nombre} ${element.apellido}`;
        });

        Swal.fire({
            title: "Selecciona a algun contacto.",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Selecciona el contacto.",
            showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === "") {
                        resolve("Selecciona algun contacto.");
                    } else {
                        resolve();
                    }
                });
            },
        }).then(async ({ value, isConfirmed }) => {
            if (isConfirmed) {
                const ContactoEmpresa = {
                    usuario: value,
                    empresa: empresa._id,
                };
                await axios.post("empresaContacto", ContactoEmpresa);
                await Swal.fire({
                    title: "Se ha agregado correctamente.",
                    icon: "success",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Se cancelo el movimiento",
                });
            }
        });
    };

    return (
        <Card className={styles.subtitle}>
            <CardContent>
                <Typography variant="h6">Nombre: {empresa.nombre}</Typography>
                <Typography className={styles.subtitle} color="textSecondary">
                    Codigo: {empresa.noCliente}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/empresas/editar/${empresa._id}`}>
                    <WarningButton>Editar</WarningButton>
                </Link>
                <ErrorButton onClick={handleEliminar}>Eliminar</ErrorButton>
                <Link to={`/empresas/trabajadores/${empresa._id}`}>
                    <Button variant="outlined" color="primary">
                        Contactos
                    </Button>
                </Link>
                <Link to={`/empresas/agregar/contacto/${empresa._id}`}>
                    <Button variant="contained" color="primary">
                        Agregar Contacto
                    </Button>
                </Link>
                <Button variant="contained" color="primary" onClick={handleAddContactExist}>
                    Agregar Contacto Existente
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardEmpresa;
