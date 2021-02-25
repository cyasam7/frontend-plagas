import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TablaVoladores from "../components/TablaVoladores";
import TablaRastreros from "../components/TablaRastrero";
import TablaRoedores from "../components/TablaRoedores";
function Revision() {
  const [Revision, setRevision] = useState();
  const { idRevision } = useParams();
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/revision/${idRevision}`);
      console.log(data);
      setRevision(data);
    })();
  }, [idRevision]);
  return (
    <Container>
      {Revision &&
        Revision.areas.map((area, index) => (
          <div key={index}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              {area.area.nombre}
            </Typography>
            <TablaVoladores area={area} />
            <TablaRastreros area={area} />
            <TablaRoedores area={area} />
          </div>
        ))}
    </Container>
  );
}

export default Revision;
