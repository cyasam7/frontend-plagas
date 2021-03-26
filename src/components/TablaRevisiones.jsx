import React, { useState, useEffect } from "react";
import TablaRastrero from "./TablaRastrero";
import TablaVoladores from "./TablaVoladores";
import TablaRoedores from "./TablaRoedores";
import TablaYellow from "./TablaYellow";
import { SuccessButton } from "./Buttons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function TablaRevisiones({ area, revision }) {
  const history = useHistory();
  const [Area, setArea] = useState("");
  const [Rastreros, setRastreros] = useState([]);
  const [Roedores, setRoedores] = useState([]);
  const [Voladores, setVoladores] = useState([]);
  const [Jacket, setJacket] = useState([]);

  useEffect(() => {
    setArea(area.area);
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
    await axios.patch(`/revisionAreas/${area._id}/${revision}`, {
      area: Area._id,
      rastreros: Rastreros,
      roedores: Roedores,
      voladores: Voladores,
      jacket: Jacket,
    });
    await Swal.fire({
      title: "Correccion Satisfactoria",
      text:
        "Se ha hecho la correccion de la revision, se volvieron a generar los reportes, puedes revisarlos en el boton de descarga.",
      icon: "success",
    });
    history.goBack();
  };
  return (
    <>
      <SuccessButton fullWidth onClick={handleUpdateData}>
        Cambiar
      </SuccessButton>
      <TablaRoedores roedores={Roedores} change={handleChangeRoedores} />
      <TablaRastrero rastreros={Rastreros} change={handleChangeRastreros} />
      <TablaVoladores voladores={Voladores} change={handleChangeVoladores} />
      <TablaYellow jacket={Jacket} change={handleChangeYellow} />
    </>
  );
}

export default TablaRevisiones;
