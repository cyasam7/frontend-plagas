import React, { useState, useEffect } from "react";
import CardCliente from "../components/CardCliente";
import CardArea from "../components/CardArea";

function Clientes() {
  const [cliente, setCliente] = useState([]);
  const [area, setArea] = useState([]);
  const [station, setStation] = useState([]);
  return (
    <div className="row">
      <div className="col">
        <div className="row d-flex justify-content-center">
          <h1>Lista de clientes</h1>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <button className="btn btn-success btn-block mb-2">Agregar</button>
                  <input className="form-control" type="text" placeholder="Buscar"/>
                  <CardCliente />
                  <CardCliente />
                  <CardCliente />
                  <CardCliente />
                  <CardCliente />
                  <CardCliente />
                  <CardCliente />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 bg-primary">
            <h3 className="text-white text-center">Lista de areas</h3>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
