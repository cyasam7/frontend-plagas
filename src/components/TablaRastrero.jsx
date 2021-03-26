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
import RowTableRastrero from "./RowTableRastrero";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableRastrero({ rastreros,change }) {
  const classes = useStyles();
  return (
    <>
      {rastreros.length > 0 && (
        <>
          <Typography gutterBottom variant="subtitle2">
            Estaciones de Rastreros
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
                  <TableCell align="center">S</TableCell>
                  <TableCell align="center">D</TableCell>
                  <TableCell align="center">R/T</TableCell>
                  <TableCell align="center">F/L</TableCell>
                  <TableCell align="center">C/N</TableCell>
                  <TableCell align="center">C/T</TableCell>
                  <TableCell align="center">C/R</TableCell>
                  <TableCell align="center">C/F</TableCell>
                  <TableCell align="center">C/M</TableCell>
                  <TableCell align="center">C/P</TableCell>
                  <TableCell align="center">C/C</TableCell>
                  <TableCell align="center">C/CAM</TableCell>
                  <TableCell align="center">C/CAL</TableCell>
                  <TableCell align="center">C/A</TableCell>
                  <TableCell align="center">C/G</TableCell>
                  <TableCell align="center">C/H</TableCell>
                  <TableCell align="center">C/CI</TableCell>
                  <TableCell align="center">C/ALAC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rastreros.map((estacion, index) => (
                  <RowTableRastrero key={index} change={change} estacion={estacion} />
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
