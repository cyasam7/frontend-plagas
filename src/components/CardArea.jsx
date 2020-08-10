import React from "react";

function CardArea() {
  return (
    <div className="card mt-1">
      <div className="card-header">Nombre</div>
      <div className="card-body">
        <div className="d-flex justify-content-around mb-1">
          <button className="btn btn-danger w-100 mr-2">Eliminar</button>
          <button className="btn btn-warning w-100 ml-2">Editar</button>
        </div>
        <button className="btn btn-block btn-primary">Ver</button>
      </div>
    </div>
  );
}

export default CardArea;
