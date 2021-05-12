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
import RowTableRoedores from "./RowTableRoedores";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TablaRoedores({ roedores, change }) {
  const classes = useStyles();
  if (roedores.length < 0) {
    return null;
  }
  return (
    <>
      {roedores.length > 0 && (
        <>
          <Typography gutterBottom variant="subtitle2">
            Estaciones de Roedores
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
                  <TableCell align="center">C/N</TableCell>
                  <TableCell align="center">S</TableCell>
                  <TableCell align="center">C/R</TableCell>
                  <TableCell align="center">F/L</TableCell>
                  <TableCell align="center">RC/ROT</TableCell>
                  <TableCell align="center">RC/R</TableCell>
                  <TableCell align="center">RC/CI</TableCell>
                  <TableCell align="center">RC/D</TableCell>
                  <TableCell align="center">RP/SR</TableCell>
                  <TableCell align="center">D</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roedores.map((estacion, index) => (
                  <RowTableRoedores key={index} change={change} estacion={estacion} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}

export default TablaRoedores;
