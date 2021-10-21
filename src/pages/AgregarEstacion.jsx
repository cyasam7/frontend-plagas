import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import FormEstacion from "../components/FormEstacion";
import { useModal } from "../Context/modal-context";
import Axios from "axios";
function AgregarEstacion() {
    const { setLoading } = useModal();
    const [error, setError] = useState(false);
    const handleCrearEstacion = async (estacion) => {
        setLoading(true);
        if (estacion.numero === "" || estacion.tipo === "") {
            setError(true);
            setLoading(false);
            return;
        }
        try {
            await Axios.post("/estacion", estacion);
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
                Agrega una estacion
            </Typography>
            <FormEstacion error={error} handle={handleCrearEstacion} />
        </>
    );
}

export default AgregarEstacion;
