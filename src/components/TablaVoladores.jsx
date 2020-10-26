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
            <TableBody>{area.voladores.map((estacion) => 
            <TableRow>
                <TableCell>{estacion.estacion.numero}</TableCell>
                <TableCell align="right">{estacion.limpieza.toString()}</TableCell>
                <TableCell align="right">{estacion.monitoreado.toString()}</TableCell>
                <TableCell align="right">{estacion.moscaVinagre}</TableCell>
                <TableCell align="right">{estacion.moscaEstablo}</TableCell>
                <TableCell align="right">{estacion.moscaMetalica}</TableCell>
                <TableCell align="right">{estacion.moscaCarne}</TableCell>
                <TableCell align="right">{estacion.moscaCasera}</TableCell>
                <TableCell align="right">{estacion.moscaDomestica}</TableCell>
                <TableCell align="right">{estacion.moscaDrenaje}</TableCell>
                <TableCell align="right">{estacion.otros}</TableCell>
                <TableCell align="right">{estacion.abejas}</TableCell>
                <TableCell align="right">{estacion.reposicionTrampaA.toString()}</TableCell>
                <TableCell align="right">{estacion.reposicionTrampaB.toString()}</TableCell>
                <TableCell align="right">{estacion.exposicionTuboLuzA.toString()}</TableCell>
                <TableCell align="right">{estacion.exposicionTuboLuzB.toString()}</TableCell>
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
