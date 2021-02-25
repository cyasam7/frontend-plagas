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

function TableRastrero({ area: { voladores } }) {
  const classes = useStyles();

  return (
    <>
      {voladores.length > 0 && (
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
                <TableCell align="right">L</TableCell>
                <TableCell align="right">M</TableCell>
                <TableCell align="right">M/V</TableCell>
                <TableCell align="right">M/E</TableCell>
                <TableCell align="right">M/M</TableCell>
                <TableCell align="right">M/C</TableCell>
                <TableCell align="right">M/PC</TableCell>
                <TableCell align="right">M/D</TableCell>
                <TableCell align="right">M/PD</TableCell>
                <TableCell align="right">O/I</TableCell>
                <TableCell align="right">ABEJAS</TableCell>
                <TableCell align="right">RT/A</TableCell>
                <TableCell align="right">RT/B</TableCell>
                <TableCell align="right">RTL/A</TableCell>
                <TableCell align="right">RTL/B</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voladores.map((estacion, index) => (
                <TableRow key={index}>
                  <TableCell>{estacion.estacion.numero}</TableCell>
                  <TableCell align="right">
                    {estacion.limpieza && "SI"}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.monitoreado ? "SI" : ""}
                  </TableCell>
                  <TableCell align="right">{estacion.moscaVinagre}</TableCell>
                  <TableCell align="right">{estacion.moscaEstablo}</TableCell>
                  <TableCell align="right">{estacion.moscaMetalica}</TableCell>
                  <TableCell align="right">{estacion.moscaCarne}</TableCell>
                  <TableCell align="right">{estacion.moscaCasera}</TableCell>
                  <TableCell align="right">{estacion.moscaDomestica}</TableCell>
                  <TableCell align="right">{estacion.moscaDrenaje}</TableCell>
                  <TableCell align="right">{estacion.otros}</TableCell>
                  <TableCell align="right">{estacion.abejas}</TableCell>
                  <TableCell align="right">
                    {estacion.reposicionTrampaA && "SI"}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.reposicionTrampaB && "SI"}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.exposicionTuboLuzA && "SI"}
                  </TableCell>
                  <TableCell align="right">
                    {estacion.exposicionTuboLuzB && "SI"}
                  </TableCell>
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
