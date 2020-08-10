import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const URI_USER = ""
function Users() {
  const [listUser, setlistUser] = useState([])

  useEffect(()=>{
    async function initList() {
      const {data} = await Axios.get(URI_USER);
      setlistUser(data);
    }
    initList();
  },[])
  return (
    <div className="row">
      <div className="col">
        <div className="row d-flex justify-content-center bg-white">
          <h1 className="">Lista de trabajadores</h1>
        </div>
        <div className="row">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Email</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((row, index) => (
                <tr key={index}>
                  <th scope="row">1</th>
                  <td>Alexander</td>
                  <td>Serrano</td>
                  <td>cyasam7@gmail.com</td>
                  <td>
                    <div className="row d-flex justify-content-around">
                      <Link
                        to={`/usuarios/edit/${index}`}
                        className="btn btn-warning"
                      >
                        Editar
                      </Link>
                      <button className="btn btn-danger">Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
