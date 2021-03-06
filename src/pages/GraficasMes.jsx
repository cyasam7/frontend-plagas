import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Grid, TextField, Button, MenuItem, Typography } from "@material-ui/core";
import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useModal } from "../Context/modal-context";
import "chartjs-plugin-datalabels";
/* import "moment/locale/es-mx"; */

function GraficasMes() {
    const { setLoading } = useModal();
    const { idEmpresa } = useParams();
    const [Mes, setMes] = useState("");
    const [Tipo, setTipo] = useState("");
    const [volador, setVolador] = useState(undefined);
    const [labels, setLabels] = useState([]);
    const [abejas, setAbejas] = useState([]);
    const [moscas, setMoscas] = useState([]);
    const [otros, setOtros] = useState([]);
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
    /* const [moscasV, setMoscasV] = useState([]); */
    const [ver, setVer] = useState(false);

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
                backgroundColor: "rgba(255,99,132,.5)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                data: moscas,
            },
            {
                label: "Abejas",
                backgroundColor: "rgba(235, 64, 52,.5)",
                borderColor: "rgba(155,231,91,0.2)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                data: abejas,
            },
            {
                label: "Otros",
                backgroundColor: "rgba(155,0,91,.5)",
                borderColor: "rgba(155,231,91,0.2)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                data: otros,
            },
        ],
    };
    const dataRastrero = {
        labels: labels,
        datasets: [
            {
                label: "tijerilla",
                backgroundColor: "rgba(255,99,132,.8)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: tijerilla,
            },
            {
                label: "roedor",
                backgroundColor: "rgba(155,231,91,.8)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: roedor,
            },
            {
                label: "frailecillos",
                backgroundColor: " rgb(147, 61, 228,.8)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: frailecillos,
            },
            {
                label: "mosca",
                backgroundColor: " rgb(61, 217, 228,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: mosca,
            },
            {
                label: "pinacate",
                backgroundColor: " rgb(61, 86, 228,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: pinacate,
            },
            {
                label: "cochinilla",
                backgroundColor: " rgb(211, 228, 61,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: cochinilla,
            },
            {
                label: "cucarachaAmericana",
                backgroundColor: " rgb(67, 228, 61,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: cucurachaAmericana,
            },
            {
                label: "cucarachaAlemana",
                backgroundColor: " rgb(228, 61, 61,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: cucurachaAlemana,
            },
            {
                label: "araña",
                backgroundColor: " rgb(228, 61, 186,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: araña,
            },
            {
                label: "hormiga",
                backgroundColor: " rgb(53, 146, 6,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: hormiga,
            },
            {
                label: "ciempies",
                backgroundColor: " rgb(61, 228, 172,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: ciempies,
            },
            {
                label: "alacran",
                backgroundColor: " rgb(981, 711, 71,.8)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: alacran,
            },
            {
                label: "grillo",
                backgroundColor: " rgb(228, 183, 61)",
                borderWidth: 1,
                hoverBorderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                data: grillo,
            },
        ],
    };

    const handleBuscar = async () => {
        if (Mes === "" || Tipo === "") {
            alert("Llenar los datos correctamente");
            return;
        }
        setLoading(true);
        const grafica = {
            mes: moment(Mes).format("MMMM"),
            ano: moment(Mes).format("YYYY"),
            tipo: Tipo,
        };
        const {
            data: { graficas },
        } = await Axios.post(`/graficas/mes/${idEmpresa}`, grafica);

        if (!graficas) {
            alert("No existe ningun registro");
            return;
        }

        if (Tipo === "Voladores") {
            const labels = graficas.map((area) => area.nombre);
            const abejas = graficas.map((area) => area.abeja);
            const mosca = graficas.map((area) => area.mosca);
            const otros = graficas.map((area) => area.otros);
            setVolador(true);
            setLabels(labels);
            setAbejas(abejas);
            setMoscas(mosca);
            setOtros(otros);
        } else {
            const labels = graficas.map((area) => area.nombre);
            const tijerilla = graficas.map((area) => area.tijerilla);
            const roedor = graficas.map((area) => area.roedor);
            const frailecillos = graficas.map((area) => area.frailecillos);
            const mosca = graficas.map((area) => area.mosca);
            const pinacate = graficas.map((area) => area.pinacate);
            const cochinilla = graficas.map((area) => area.cochinilla);
            const cucarachaAmericana = graficas.map((area) => area.cucarachaAmericana);
            const cucarachaAlemana = graficas.map((area) => area.cucarachaAlemana);
            const araña = graficas.map((area) => area.araña);
            const grillo = graficas.map((area) => area.grillo);
            const hormiga = graficas.map((area) => area.hormiga);
            const ciempies = graficas.map((area) => area.ciempies);
            const alacran = graficas.map((area) => area.alacran);

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
        setLoading(false);
    };
    return (
        <>
            <Grid container spacing={2} alignItems="center" style={{ marginBottom: 15 }}>
                <Grid item md={4}>
                    <TextField
                        fullWidth
                        value={Mes}
                        type="month"
                        label=""
                        onChange={(e) => {
                            setVer(false);
                            setMes(e.target.value);
                        }}
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
                    <Button fullWidth onClick={handleBuscar} variant="contained" color="primary">
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
                        paperSize="letter"
                        scale={0.7}
                        margin="1cm"
                        fileName={`${moment(Mes).format("MMMM")}-reporte`}
                        landscape={true}
                        ref={(component) => (pdfExportComponent = component)}
                    >
                        <Grid container justify="center">
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom>
                                    {`${Mes} de ${Tipo}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} lg={10}>
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
                                    data={volador ? data : dataRastrero}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: true,
                                    }}
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
