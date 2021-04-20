import React from "react";
import { TableRow, TableCell, TextField, Checkbox } from "@material-ui/core";

function RowTableRastrero({ estacion, change, corta }) {
  const handleChange = (e) => {
    change(estacion._id, e.target.name, e.target.value);
  };
  const handleChangeChecked = (e) => {
    change(estacion._id, e.target.name, e.target.checked);
  };
  return (
    <TableRow>
      <TableCell>{estacion.estacion.numero}</TableCell>
      <TableCell align="right">
        <Checkbox
          name="condicionNormal"
          onChange={handleChangeChecked}
          checked={estacion.condicionNormal}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          name="sucia"
          onChange={handleChangeChecked}
          checked={estacion.sucia}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          name="roedor"
          onChange={handleChange}
          value={estacion.roedor}
        />
      </TableCell>
      {!corta && (
        <>
          <TableCell align="right">
            <TextField
              name="cucarachaAmericana"
              onChange={handleChange}
              value={estacion.cucarachaAmericana}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="cucarachaAlemana"
              onChange={handleChange}
              value={estacion.cucarachaAlemana}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="grillo"
              onChange={handleChange}
              value={estacion.grillo}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              type=""
              name="tijerilla"
              onChange={handleChange}
              value={estacion.tijerilla}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="cochinilla"
              onChange={handleChange}
              value={estacion.cochinilla}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="frailecillos"
              onChange={handleChange}
              value={estacion.frailecillos}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="mosca"
              onChange={handleChange}
              value={estacion.mosca}
            />
          </TableCell>
        </>
      )}
      <TableCell align="right">
        <Checkbox
          name="fueraLugar"
          onChange={handleChangeChecked}
          checked={estacion.fueraLugar}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          name="dañada"
          onChange={handleChangeChecked}
          checked={estacion.dañada}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          required
          name="reposicionTrampa"
          onChange={handleChange}
          value={estacion.reposicionTrampa}
        />
      </TableCell>
      {!corta && (
        <>
          <TableCell align="right">
            <TextField
              name="araña"
              onChange={handleChange}
              value={estacion.araña}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="alacran"
              onChange={handleChange}
              value={estacion.alacran}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="hormiga"
              onChange={handleChange}
              value={estacion.hormiga}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="pinacate"
              onChange={handleChange}
              value={estacion.pinacate}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              name="ciempies"
              onChange={handleChange}
              value={estacion.ciempies}
            />
          </TableCell>
        </>
      )}
    </TableRow>
  );
}

export default RowTableRastrero;
