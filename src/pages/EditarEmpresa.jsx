import React, { useEffect, useState } from "react";
import FormEmpresas from "../components/FormEmpresa";
import Axios from "axios";
import {useParams, useHistory} from 'react-router-dom'
function EditarEmpresa() {
    const params = useParams();
    const history = useHistory();
    const [Empresa, setEmpresa] = useState(undefined);
  useEffect(() => {
    async function init() {
        const {data} = await Axios.get(`/empresa/${params.idEmpresa}`)
        return data
    }
    init()
    .then(empresa =>{
        setEmpresa(empresa)
    })
  },[params]);
  const handlePatchEmpresa = (data) =>{
    Axios.patch(`/empresa/${params.idEmpresa}`,data)
    history.goBack();
  }
  return (
    <>
        <FormEmpresas handle={handlePatchEmpresa} empresa={Empresa}/> 
    </>
  );
}

export default EditarEmpresa;
