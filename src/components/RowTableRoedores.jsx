import React from "react";
import { TableRow, TableCell, Checkbox,TextField } from "@material-ui/core";

function RowTableRoedores({ estacion, change }) {
  const handleChange = (e) => {
    change(estacion._id, e.target.name, e.target.checked);
  };
  const handleChangeValue = (e) => {
    change(estacion._id, e.target.name, e.target.value);
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
        <TextField
          name="reposicionCeboRotacion"
          onChange={handleChangeValue}
          value={estacion.reposicionCeboRotacion}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="consumoRoedor"
          onChange={handleChangeValue}
          value={estacion.consumoRoedor}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="consumoInsectos"
          onChange={handleChangeValue}
          value={estacion.consumoInsectos}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          name="consumoDescomposicion"
          onChange={handleChangeValue}
          value={estacion.consumoDescomposicion}
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
