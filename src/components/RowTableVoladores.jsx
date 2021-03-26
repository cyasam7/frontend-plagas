import React from "react";
import { TableRow, TableCell, TextField, Checkbox } from "@material-ui/core";
function RowTableVoladores({ estacion, change }) {
  const handleChangeCheckBox = (e) => {
    change(estacion._id, e.target.name, e.target.checked);
  };
  const handleChange = (e) => {
    change(estacion._id, e.target.name, e.target.value);
  };
  return (
    <TableRow>
      <TableCell>{estacion.estacion.numero}</TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="limpieza"
          checked={estacion.limpieza}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="monitoreado"
          checked={estacion.monitoreado}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaVinagre"
          value={estacion.moscaVinagre}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaEstablo"
          value={estacion.moscaEstablo}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaMetalica"
          value={estacion.moscaMetalica}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaCarne"
          value={estacion.moscaCarne}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaCasera"
          value={estacion.moscaCasera}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaDomestica"
          value={estacion.moscaDomestica}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="moscaDrenaje"
          value={estacion.moscaDrenaje}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="otros"
          value={estacion.otros}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          onChange={handleChange}
          name="abejas"
          value={estacion.abejas}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="reposicionTrampaA"
          checked={estacion.reposicionTrampaA}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="reposicionTrampaB"
          checked={estacion.reposicionTrampaB}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="exposicionTuboLuzA"
          checked={estacion.exposicionTuboLuzA}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          onChange={handleChangeCheckBox}
          name="exposicionTuboLuzB"
          checked={estacion.exposicionTuboLuzB}
        />
      </TableCell>
    </TableRow>
  );
}

export default RowTableVoladores;
