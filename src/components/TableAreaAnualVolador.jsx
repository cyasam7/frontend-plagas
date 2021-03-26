import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";

function TableAreaAnual({ area }) {
  const data = {
    labels: area.año
      .map((año) => año.mes.map((mes) => `${mes.mes} ${año.año}`))
      .flat(),
    datasets: [
      {
        label: "Abejas",
        backgroundColor: "rgba(25,99,132,.5)",
        borderColor: "rgba(255,99,132,1)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: area.año
          .map((año) => año.mes.map((mes) => mes.total.abejas))
          .flat(),
      },
      {
        label: "Moscas",
        backgroundColor: "rgba(235, 64, 52,.5)",
        borderColor: "rgba(155,231,91,0.2)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: area.año
          .map((año) => año.mes.map((mes) => mes.total.moscas))
          .flat(),
        fill: false,
      },
    ],
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {area.area}
      </Typography>
      {/* <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper} style={{ marginBottom: 15 }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    {area.area.toUpperCase()}
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
      </Grid> */}
      <Grid container>
        <Grid item xs={12} md={12} lg={10} xl={8}>
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
