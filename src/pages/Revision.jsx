import { Container, MenuItem, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TablaVoladores from "../components/TablaVoladores";
import TablaRastreros from "../components/TablaRastrero";
import TablaRoedores from "../components/TablaRoedores";
function Revision() {
  const { idRevision } = useParams();
  const [Revision, setRevision] = useState();
  const [Area, setArea] = useState("");
  const [Tipo, setTipo] = useState("");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/revision/${idRevision}`);
      console.log(data);
      setRevision(data);
    })();
  }, [idRevision]);
  return (
    <Container>
      <TextField
        fullWidth
        select
        label="Area"
        helperText="Selecciona el nombre del area para ver lista de estaciones"
        value={Area}
        onChange={(e) => {
          setArea(e.target.value);
        }}
      >
        {Revision &&
          Revision.areas.map((area, index) => (
            <MenuItem key={index} value={area.area._id}>
              {area.area.nombre.toUpperCase()}
            </MenuItem>
          ))}
      </TextField>
      {Revision &&
        Revision.areas
          .filter((area) => area.area._id === Area)
          .map((area) => (
            <>
              <TablaRastreros area={area} />
              <TablaVoladores area={area} />
              <TablaRoedores area={area} />
            </>
          ))}
    </Container>
  );
}

export default Revision;
