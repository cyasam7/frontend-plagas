import React, { useState, useEffect } from "react";
import TablaRastrero from "./TablaRastrero";
import TablaVoladores from "./TablaVoladores";
import TablaRoedores from "./TablaRoedores";
import TablaYellow from "./TablaYellow";
import { SuccessButton } from "./Buttons";
import axios from "axios";
import Swal from "sweetalert2";
import { useModal } from "../Context/modal-context";

function TablaRevisiones({ area, revision, corta, actualizar }) {
    const { setLoading } = useModal();
    const [Area, setArea] = useState("");
    const [Rastreros, setRastreros] = useState([]);
    const [Roedores, setRoedores] = useState([]);
    const [Voladores, setVoladores] = useState([]);
    const [Jacket, setJacket] = useState([]);

    useEffect(() => {
        setArea(area.area._id);
        setRastreros(area.rastreros);
        setRoedores(area.roedores);
        setVoladores(area.voladores);
        setJacket(area.jacket);
    }, [area]);

    const handleChangeRoedores = (id, name, value) => {
        const estacion = Roedores.filter((estacion) => estacion._id === id);
        const estacionBuscada = estacion[0];
        estacionBuscada[name] = value;
        const nuevoArreglo = Roedores.map((estacion) => {
            if (estacion._id === id) {
                estacion = estacionBuscada;
            }
            return estacion;
        });
        setRoedores(nuevoArreglo);
    };
    const handleChangeRastreros = (id, name, value) => {
        const estacion = Rastreros.filter((estacion) => estacion._id === id);
        const estacionBuscada = estacion[0];
        estacionBuscada[name] = value;
        const nuevoArreglo = Rastreros.map((estacion) => {
            if (estacion._id === id) {
                estacion = estacionBuscada;
            }
            return estacion;
        });
        setRastreros(nuevoArreglo);
    };
    const handleChangeVoladores = (id, name, value) => {
        const estacion = Voladores.filter((estacion) => estacion._id === id);
        const estacionBuscada = estacion[0];
        estacionBuscada[name] = value;
        const nuevoArreglo = Voladores.map((estacion) => {
            if (estacion._id === id) {
                estacion = estacionBuscada;
            }
            return estacion;
        });
        setVoladores(nuevoArreglo);
    };
    const handleChangeYellow = (id, name, value) => {
        const estacion = Jacket.filter((estacion) => estacion._id === id);
        const estacionBuscada = estacion[0];
        estacionBuscada[name] = value;
        const nuevoArreglo = Jacket.map((estacion) => {
            if (estacion._id === id) {
                estacion = estacionBuscada;
            }
            return estacion;
        });
        setJacket(nuevoArreglo);
    };

    const handleUpdateData = async () => {
        const cantidadCebos = Roedores.reduce(
            (acum, obj) =>
                (acum =
                    acum +
                    parseInt(obj.consumoDescomposicion) +
                    parseInt(obj.consumoInsectos) +
                    parseInt(obj.consumoRoedor) +
                    parseInt(obj.reposicionCeboRotacion)),
            0
        );
        setLoading(true);
        try {
            await axios.patch(`/revisionAreas/${area._id}/${revision}`, {
                area: {
                    area: Area,
                    rastreros: Rastreros,
                    roedores: Roedores,
                    voladores: Voladores,
                    jacket: Jacket,
                },
                cantidadCebos,
            });
            setLoading(false);
            await Swal.fire({
                title: "Correccion Satisfactoria",
                text: "Se ha hecho la correccion de la revision, se volvieron a generar los reportes, puedes revisarlos en el boton de descarga.",
                icon: "success",
            });
        } catch (error) {
            await Swal.fire({
                title: "Error",
                text: "No se ha hecho la correccion",
                icon: "error",
            });
        }
    };
    return (
        <>
            <SuccessButton fullWidth onClick={handleUpdateData}>
                Cambiar
            </SuccessButton>
            <TablaRoedores roedores={Roedores} change={handleChangeRoedores} />
            <TablaRastrero
                corta={corta.tipoVoladores === "Corto" ? true : false}
                rastreros={Rastreros}
                change={handleChangeRastreros}
            />
            <TablaVoladores
                corta={corta.tipoRastreros === "Corto" ? true : false}
                voladores={Voladores}
                change={handleChangeVoladores}
            />
            <TablaYellow jacket={Jacket} change={handleChangeYellow} />
        </>
    );
}

export default TablaRevisiones;
