import React, { useEffect, useState } from "react";
import TablaRevisiones from "../components/TablaRevisiones";
import { useParams } from "react-router-dom";
import { Container, MenuItem, TextField } from "@material-ui/core";
import axios from "axios";

function Revision() {
  const { idRevision } = useParams();
  const [Revision, setRevision] = useState();
  const [Area, setArea] = useState("");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/revision/${idRevision}`);
      console.log(data.tipoRevision);
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
      {Revision && (
        <>
          {Revision.areas
            .filter((area) => area.area._id === Area)
            .map((area, index) => (
              <TablaRevisiones
                key={index}
                area={area}
                corta={Revision.tipoRevision == "Corta" ? true : false}
                revision={idRevision}
              />
            ))}
        </>
      )}
    </Container>
  );
}

export default Revision;
