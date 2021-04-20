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
import RowTableVoladores from "./RowTableVoladores";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableRastrero({ voladores, change, corta }) {
  const classes = useStyles();

  return (
    <>
      {voladores.length > 0 && (
        <>
          <Typography gutterBottom variant="subtitle2">
            Estaciones de Voladores
          </Typography>
          <TableContainer component={Paper} style={{ marginBottom: 15 }}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Dispositivo</TableCell>
                  <TableCell align="center">M</TableCell>
                  <TableCell align="center">L</TableCell>
                  {corta && <TableCell align="center">C/M</TableCell>}
                  {!corta && (
                    <>
                      <TableCell align="center">M/V</TableCell>
                      <TableCell align="center">M/E</TableCell>
                      <TableCell align="center">M/M</TableCell>
                      <TableCell align="center">M/C</TableCell>
                      <TableCell align="center">M/PC</TableCell>
                      <TableCell align="center">M/D</TableCell>
                      <TableCell align="center">M/PD</TableCell>
                    </>
                  )}
                  <TableCell align="center">O/I</TableCell>
                  <TableCell align="center">ABEJAS</TableCell>
                  <TableCell align="center">RT/A</TableCell>
                  <TableCell align="center">RT/B</TableCell>
                  <TableCell align="center">RTL/A</TableCell>
                  <TableCell align="center">RTL/B</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {voladores.map((estacion, index) => (
                  <RowTableVoladores
                    corta={corta}
                    key={index}
                    change={change}
                    estacion={estacion}
                  />
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
