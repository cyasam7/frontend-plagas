import React from "react";
import { TableRow, TableCell, Checkbox } from "@material-ui/core";

function RowTableRoedores({ estacion, change }) {
  const handleChange = (e) => {
    change(estacion._id, e.target.name, e.target.checked);
  };
  return (
    <TableRow>
      <TableCell>{estacion.estacion.numero}</TableCell>
      <TableCell align="center">
        <Checkbox
          name="condicion"
          onChange={handleChange}
          checked={estacion.condicion}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="sucia"
          onChange={handleChange}
          checked={estacion.sucia}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="conRoedor"
          onChange={handleChange}
          checked={estacion.conRoedor}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="fueraLugar"
          onChange={handleChange}
          checked={estacion.fueraLugar}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="consumoRoedor"
          onChange={handleChange}
          checked={estacion.consumoRoedor}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="consumoInsectos"
          onChange={handleChange}
          checked={estacion.consumoInsectos}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="consumoDescomposicion"
          onChange={handleChange}
          checked={estacion.consumoDescomposicion}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="consumoParcialSinReposicion"
          onChange={handleChange}
          checked={estacion.consumoParcialSinReposicion}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          name="dañada"
          onChange={handleChange}
          checked={estacion.dañada}
        />
      </TableCell>
    </TableRow>
  );
}

export default RowTableRoedores;
