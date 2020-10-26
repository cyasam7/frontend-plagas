import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableRastrero({ revision }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2">Fecha: {" "}{`${revision.dia} / ${revision.mes} / ${revision.año}`}</Typography>
      {revision.areas.map((area) => 
        <TableContainer component={Paper} style={{marginBottom: 15}}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  Area: {area.area.nombre}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dispositivo</TableCell>
                <TableCell align="right">S</TableCell>
                <TableCell align="right">D</TableCell>
                <TableCell align="right">R/T</TableCell>
                <TableCell align="right">F/L</TableCell>
                <TableCell align="right">CON/N</TableCell>
                <TableCell align="right">C/T</TableCell>
                <TableCell align="right">C/R</TableCell>
                <TableCell align="right">C/F</TableCell>
                <TableCell align="right">C/M</TableCell>
                <TableCell align="right">C/P</TableCell>
                <TableCell align="right">C/C</TableCell>
                <TableCell align="right">C/CAM</TableCell>
                <TableCell align="right">C/CAL</TableCell>
                <TableCell align="right">C/A</TableCell>
                <TableCell align="right">C/G</TableCell>
                <TableCell align="right">C/H</TableCell>
                <TableCell align="right">C/CI</TableCell>
                <TableCell align="right">C/ALAC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{area.rastreros.map((estacion) => 
            <TableRow>
                <TableCell>{estacion.estacion.numero}</TableCell>
                <TableCell align="right">{estacion.sucia.toString()}</TableCell>
                <TableCell align="right">{estacion.dañada.toString()}</TableCell>
                <TableCell align="right">{estacion.reposicionTrampa.toString()}</TableCell>
                <TableCell align="right">{estacion.fueraLugar.toString()}</TableCell>
                <TableCell align="right">{estacion.condicionNormal.toString()}</TableCell>
                <TableCell align="right">{estacion.tijerilla}</TableCell>
                <TableCell align="right">{estacion.roedor}</TableCell>
                <TableCell align="right">{estacion.frailecillos}</TableCell>
                <TableCell align="right">{estacion.mosca}</TableCell>
                <TableCell align="right">{estacion.pinacate}</TableCell>
                <TableCell align="right">{estacion.cochinilla}</TableCell>
                <TableCell align="right">{estacion.cucarachaAmericana}</TableCell>
                <TableCell align="right">{estacion.cucarachaAlemana}</TableCell>
                <TableCell align="right">{estacion.araña}</TableCell>
                <TableCell align="right">{estacion.grillo}</TableCell>
                <TableCell align="right">{estacion.hormiga}</TableCell>
                <TableCell align="right">{estacion.ciempies}</TableCell>
                <TableCell align="right">{estacion.alacran}</TableCell>
            </TableRow>
            )}</TableBody>
          </Table>
        </TableContainer>
      )}
      <br></br>
    </>
  );
}

export default TableRastrero;
