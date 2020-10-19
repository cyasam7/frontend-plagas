import React, { useEffect, useState } from "react";
import FormEmpresas from "../components/FormEmpresa";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../Context/modal-context";

function EditarEmpresa() {
  const { setLoading } = useModal();
  const params = useParams();
  const history = useHistory();
  const [Empresa, setEmpresa] = useState(undefined);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function init() {
      const { data } = await Axios.get(`/empresa/${params.idEmpresa}`);
      return data;
    }
    setLoading(true);
    init().then((empresa) => {
      setEmpresa(empresa);
      setLoading(false);
    });
  }, [params,setLoading]);
  const handlePatchEmpresa = async (data) => {
    setLoading(true);
    if (data.nombre === "" || data.codigo === "") {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await Axios.patch(`/empresa/${params.idEmpresa}`, data);
      history.goBack();
    } catch (error) {
      setError(true)
      history.goBack();
      alert("No se actualizo, datos no validos")
    } finally{
      setLoading(false)
    }
  };
  return (
    <>
      <FormEmpresas error={error} handle={handlePatchEmpresa} empresa={Empresa} />
    </>
  );
}

export default EditarEmpresa;
