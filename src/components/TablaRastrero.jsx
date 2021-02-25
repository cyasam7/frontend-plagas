import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableRastrero({ area: { rastreros } }) {
  const classes = useStyles();
  return (
    <>
      {rastreros.length > 0 && (
        <>
        <Typography gutterBottom variant="subtitle2">Estaciones de Rastreros</Typography>
        <TableContainer component={Paper} style={{ marginBottom: 15 }}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
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
            <TableBody>
              {rastreros.map((estacion) => (
                <TableRow>
                  <TableCell>{estacion.estacion.numero}</TableCell>
                  <TableCell align="right">
                    {estacion.sucia ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.dañada ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.reposicionTrampa ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.fueraLugar ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.condicionNormal ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">{estacion.tijerilla > 0 && estacion.tijerilla}</TableCell>
                  <TableCell align="right">{estacion.roedor > 0 && estacion.roedor}</TableCell>
                  <TableCell align="right">{estacion.frailecillos > 0 && estacion.frailecillos}</TableCell>
                  <TableCell align="right">{estacion.mosca > 0 && estacion.mosca}</TableCell>
                  <TableCell align="right">{estacion.pinacate > 0 && estacion.pinacate}</TableCell>
                  <TableCell align="right">{estacion.cochinilla > 0 && estacion.cochinilla}</TableCell>
                  <TableCell align="right">
                    {estacion.cucarachaAmericana > 0 && estacion.cucarachaAmericana}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.cucarachaAlemana > 0 && estacion.cucarachaAlemana}
                  </TableCell>
                  <TableCell align="right">{estacion.araña > 0 && estacion.araña}</TableCell>
                  <TableCell align="right">{estacion.grillo > 0 && estacion.grillo}</TableCell>
                  <TableCell align="right">{estacion.hormiga > 0 && estacion.hormiga}</TableCell>
                  <TableCell align="right">{estacion.ciempies > 0 && estacion.ciempies}</TableCell>
                  <TableCell align="right">{estacion.alacran > 0 && estacion.alacran}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      )}
    </>
  );
}

export default TableRastrero;
