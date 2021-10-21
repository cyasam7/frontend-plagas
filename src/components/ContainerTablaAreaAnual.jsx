import React from "react";
import TableAreaAnualVolador from "./TableAreaAnualVolador";
import { Typography } from "@material-ui/core";
function ContainerTablaAreaAnual({ revision, primerAño, segundoAño }) {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                {`Reporte anual por areas del ${primerAño} y ${segundoAño}`}
            </Typography>
            {revision.map((area, index) => (
                <TableAreaAnualVolador area={area} key={index} />
            ))}
        </>
    );
}

export default ContainerTablaAreaAnual;
