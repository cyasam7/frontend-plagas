import React, { useState } from "react";
import { HorizontalBar } from "react-chartjs-2";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "chartjs-plugin-datalabels";
import TableRastrero from "../components/TableRastrero";
import TablaVoladores from "../components/TablaVoladores";

function GraficasMes() {
  const { idEmpresa } = useParams();
  const [Mes, setMes] = useState("");
  const [Tipo, setTipo] = useState("");
  const [volador, setVolador] = useState(undefined);
  const [labels, setLabels] = useState([]);
  const [abejas, setAbejas] = useState([]);
  const [moscas, setMoscas] = useState([]);
  //--
  const [tijerilla, setTijerilla] = useState([]);
  const [roedor, setRoedor] = useState([]);
  const [frailecillos, setFrailecillos] = useState([]);
  const [mosca, setMosca] = useState([]);
  const [pinacate, setPinacate] = useState([]);
  const [cochinilla, setCochinilla] = useState([]);
  const [cucurachaAmericana, setCucarachaAme] = useState([]);
  const [cucurachaAlemana, setCucarachaAlem] = useState([]);
  const [araña, setAraña] = useState([]);
  const [grillo, setGrillo] = useState([]);
  const [hormiga, setHormiga] = useState([]);
  const [ciempies, setCiempies] = useState([]);
  const [alacran, setAlacran] = useState([]);
  const [ver, setVer] = useState(false);
  const [revisiones, setRevisiones] = useState([]);

  let pdfExportComponent;
  const estations = [
    {
      value: "Rastreros",
      label: "Rastreros",
    },
    {
      value: "Voladores",
      label: "Voladores",
    },
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Moscas",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: moscas,
      },
      {
        label: "Abejas",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(155,231,91,0.2)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: abejas,
      },
    ],
  };
  const dataRastrero = {
    labels: labels,
    datasets: [
      {
        label: "tijerilla",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: tijerilla,
      },
      {
        label: "roedor",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: roedor,
      },
      {
        label: "frailecillos",
        backgroundColor: " rgb(147, 61, 228)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: frailecillos,
      },
      {
        label: "mosca",
        backgroundColor: " rgb(61, 217, 228)",
        borderColor: " rgb(255, 255, 255))",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: mosca,
      },
      {
        label: "pinacate",
        backgroundColor: " rgb(61, 86, 228)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: pinacate,
      },
      {
        label: "cochinilla",
        backgroundColor: " rgb(211, 228, 61)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: cochinilla,
      },
      {
        label: "cucarachaAmericana",
        backgroundColor: " rgb(67, 228, 61)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: cucurachaAmericana,
      },
      {
        label: "cucarachaAlemana",
        backgroundColor: " rgb(228, 61, 61)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: cucurachaAlemana,
      },
      {
        label: "araña",
        backgroundColor: " rgb(228, 61, 186)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: araña,
      },
      {
        label: "hormiga",
        backgroundColor: " rgb(195, 61, 228)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: hormiga,
      },
      {
        label: "ciempies",
        backgroundColor: " rgb(61, 228, 172)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: ciempies,
      },
      {
        label: "alacran",
        backgroundColor: " rgb(61, 228, 172)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: alacran,
      },
      {
        label: "grillo",
        backgroundColor: " rgb(228, 183, 61)",
        borderColor: " rgb(255, 255, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: grillo,
      },
    ],
  };

  const handleBuscar = async () => {
    if (Mes === "" || Tipo === "") {
      alert("Llenar los datos correctamente");
      return;
    }

    const grafica = {
      mes: moment(Mes).format("MMMM"),
      año: moment(Mes).format("YYYY"),
      tipo: Tipo,
    };
    const {
      data: { graficas, modelados },
    } = await Axios.post(`/graficas/mes/${idEmpresa}`, grafica);
    if(!graficas){
      alert("No existe ningun registro")
      return;
    }
    setRevisiones(modelados);
    if (Tipo === "Voladores") {
      const labels = graficas.map((area) => {
        return area.nombre;
      });
      const abejas = graficas.map((area) => {
        return area.abeja;
      });
      const mosca = graficas.map((area) => {
        return area.mosca;
      });
      setVolador(true);
      setLabels(labels);
      setAbejas(abejas);
      setMoscas(mosca);
    } else {
      const labels = graficas.map((area) => {
        return area.nombre;
      });
      const tijerilla = graficas.map((area) => {
        return area.tijerilla;
      });
      const roedor = graficas.map((area) => {
        return area.roedor;
      });
      const frailecillos = graficas.map((area) => {
        return area.frailecillos;
      });
      const mosca = graficas.map((area) => {
        return area.mosca;
      });
      const pinacate = graficas.map((area) => {
        return area.pinacate;
      });
      const cochinilla = graficas.map((area) => {
        return area.cochinilla;
      });
      const cucarachaAmericana = graficas.map((area) => {
        return area.cucarachaAmericana;
      });
      const cucarachaAlemana = graficas.map((area) => {
        return area.cucarachaAlemana;
      });
      const araña = graficas.map((area) => {
        return area.araña;
      });
      const grillo = graficas.map((area) => {
        return area.grillo;
      });
      const hormiga = graficas.map((area) => {
        return area.hormiga;
      });
      const ciempies = graficas.map((area) => {
        return area.ciempies;
      });
      const alacran = graficas.map((area) => {
        return area.alacran;
      });

      setLabels(labels);
      setVolador(false);
      setTijerilla(tijerilla);
      setRoedor(roedor);
      setFrailecillos(frailecillos);
      setMosca(mosca);
      setPinacate(pinacate);
      setCochinilla(cochinilla);
      setCucarachaAme(cucarachaAmericana);
      setCucarachaAlem(cucarachaAlemana);
      setAraña(araña);
      setGrillo(grillo);
      setHormiga(hormiga);
      setCiempies(ciempies);
      setAlacran(alacran);
    }
    setVer(true);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginBottom: 15 }}
      >
        <Grid item md={4}>
          <TextField
            fullWidth
            value={Mes}
            type="month"
            label=""
            onChange={(e) => setMes(e.target.value)}
            helperText="Seleccione mes y año"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            select
            label="Selecciona"
            value={Tipo}
            onChange={(e) => {
              setVer(false);
              setTipo(e.target.value);
            }}
            helperText="Seleccione tipo de estacion"
          >
            {estations.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={2}>
          <Button
            fullWidth
            onClick={handleBuscar}
            variant="contained"
            color="primary"
          >
            Aceptar
          </Button>
        </Grid>
      </Grid>

      <br />
      {ver && (
        <>
          <Grid container>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                color="primary"
                onClick={() => {
                  pdfExportComponent.save();
                }}
              >
                Generar archivo
              </Button>
            </Grid>
          </Grid>

          <PDFExport
            paperSize="A4"
            scale={0.7}
            margin="1cm"
            fileName={`${moment(Mes).format("MMMM")}-reporte`}
            landscape={true}
            ref={(component) => (pdfExportComponent = component)}
          >
            <Grid container justify="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Reporte
                </Typography>
              </Grid>
            </Grid>
            {Tipo === "Rastreros" ? (
              <>
                {revisiones.map((revision, index) => (
                  <TableRastrero key={index} revision={revision} />
                ))}
              </>
            ) : (
              revisiones.map((revision, index) => (
                <TablaVoladores key={index} revision={revision} />
              ))
            )}
            <Grid container>
              <Grid item xs={12}>
                <HorizontalBar
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
                  data={volador ? data : dataRastrero}
                />
              </Grid>
            </Grid>
          </PDFExport>
        </>
      )}
    </>
  );
}

export default GraficasMes;
