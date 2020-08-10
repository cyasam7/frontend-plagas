import React from "react";

function CardCliente({ _id, nombre, email, telefono }) {
  return (
    <div className="card my-5">
      <div className="card-header d-flex justify-content-between">
        <h4>Nombre: Alexanderdsajasjdgsajgdjasgjds</h4>
      </div>
      <div className="card-body">
        <p className="card-title">Correo: cyasam7@gmail.com</p>
        <p className="card-subtitle">Telefono: 6183240572</p>
        <div className="d-flex justify-content-around mb-1">
          <button className="btn btn-danger w-100 mr-2">Eliminar</button>
          <button className="btn btn-warning w-100 ml-2">Editar</button>
        </div>
        <a href="/" className="btn btn-primary btn-block mt-1">
            Seleccionar
          </a>
      </div>
    </div>
  );
}

export default CardCliente;
