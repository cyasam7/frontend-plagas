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

function TablaRoedores({ area: { area, roedores } }) {
  const classes = useStyles();
  if (roedores.length < 0) {
    return null;
  }
  return (
    <>
      {roedores.length > 0 && (
        <>
          <Typography gutterBottom variant="subtitle2">Estaciones de Roedores</Typography>
          <TableContainer component={Paper} style={{ marginBottom: 15 }}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Dispositivo</TableCell>
                  <TableCell align="right">C/N</TableCell>
                  <TableCell align="right">S</TableCell>
                  <TableCell align="right">C/R</TableCell>
                  <TableCell align="right">F/L</TableCell>
                  <TableCell align="right">RC/R</TableCell>
                  <TableCell align="right">RC/CI</TableCell>
                  <TableCell align="right">RC/D</TableCell>
                  <TableCell align="right">RP/SR</TableCell>
                  <TableCell align="right">D</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roedores.map((estacion, index) => (
                  <TableRow key={index}>
                    <TableCell>{estacion.estacion.numero}</TableCell>
                    <TableCell align="right">
                      {estacion.condicion && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.monitoreado && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.sucia && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.conRoedor && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.fueraLugar && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.consumoRoedor && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.consumoInsectos && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.consumoDescomposicion && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.consumoParcialSinReposicion && "SI"}
                    </TableCell>
                    <TableCell align="right">
                      {estacion.dañada && "SI"}
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

export default TablaRoedores;
