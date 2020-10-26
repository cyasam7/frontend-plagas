import React from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";

function TableAreaAnual({ año, titulo }) {
  const data = {
    labels: año.año[0].mes.map((mes) => mes.mes),
    datasets: año.año.map((año) => {
      return {
        label: año.año,
        backgroundColor: `#a0d8d8`,
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: año.mes.map((mes) => mes.total[titulo]),
      };
    }),
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginBottom: 15 }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    {titulo.toUpperCase()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>X</TableCell>
                  {año.año[0].mes.map((mes, index) => (
                    <TableCell key={index}>{mes.mes}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {año.año.map((año, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{año.año}</TableCell>
                      {año.mes.map((mes, index) => (
                        <TableCell key={index}> {mes.total[titulo]}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Bar
            plugins={{
              datalabels: {
                display: (ctx) => {
                  return true;
                },
                formatter: (ctx, data) => {
                  return `${data.dataIndex}`;
                },
              },
            }}
            data={data}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default TableAreaAnual;
