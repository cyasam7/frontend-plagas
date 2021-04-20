import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableYellow({ jacket, change }) {
  const classes = useStyles();
  console.log(jacket);
  const handleChange = (e, estacion) => {
    change(estacion._id, e.target.name, e.target.checked);
  };
  if (!jacket.length) {
    return null;
  }
  return (
    <>
      <Typography gutterBottom variant="subtitle2">
        Equipos Yellow Jacket
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
              <TableCell align="center">Revisado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jacket.map((estacion, key) => (
              <TableRow key={key}>
                <TableCell>{estacion.estacion.numero}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    onChange={(e) => handleChange(e, estacion)}
                    name="revisado"
                    checked={estacion.revisado}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableYellow;
