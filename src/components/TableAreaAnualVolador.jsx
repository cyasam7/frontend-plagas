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
import { Line } from "react-chartjs-2";

function TableAreaAnual({ año, titulo, isTitulo }) {

  const data = {
    labels: año.año[0].mes.map((mes) => mes.mes).reverse(),
    datasets: año.año.map((año) => {
      return {
        label: año.año,
        borderColor: `rgb(${Math.random() * (250 - 1) + 1},${
          Math.random() * (250 - 1) + 1
        },${Math.random() * (250 - 1) + 1}, 0.5)`.toString(),
        data: año.mes.map((mes) => mes.total[titulo]).reverse(),
        fill: false,
      };
    }),
  };
  return (
    <>
      {isTitulo && (
        <>
          <hr />
          <Typography variant="h6" align="center" gutterBottom>
            {año.area}
          </Typography>
        </>
      )}
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
                  {año.año[0].mes
                    .map((mes, index) => (
                      <TableCell key={index}>{mes.mes}</TableCell>
                    ))
                    .reverse()}
                </TableRow>
              </TableHead>
              <TableBody>
                {año.año.map((año, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{año.año}</TableCell>
                      {año.mes
                        .map((mes, index) => (
                          <TableCell key={index}>
                            {" "}
                            {mes.total[titulo]}
                          </TableCell>
                        ))
                        .reverse()}
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
          <Line
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
            options={{ responsive: true, maintainAspectRatio: true }}
            height={176}
            width={500}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default TableAreaAnual;
