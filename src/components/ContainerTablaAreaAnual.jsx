import React from "react";
import TableAreaAnualVolador from "./TableAreaAnualVolador";
import { Typography } from "@material-ui/core";
function ContainerTablaAreaAnual({ revision, primerAño, segundoAño }) {
  console.log(revision);
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        {`Reporte anual comparativo de los años ${primerAño} y ${segundoAño}`}
      </Typography>
      {revision.map((area, index) => (
        <TableAreaAnualVolador area={area} key={index} />
      ))}
    </>
  );
}

export default ContainerTablaAreaAnual;
