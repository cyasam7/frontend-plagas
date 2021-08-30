import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Grid, TextField, Button, MenuItem, Typography } from "@material-ui/core";
import { useModal } from "../Context/modal-context";
import { PDFExport } from "@progress/kendo-react-pdf";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "chartjs-plugin-datalabels";
import Swal from "sweetalert2";
function GraficasAnual() {
    const { idEmpresa } = useParams();
    const [Tipo, setTipo] = useState("");
    const { setLoading } = useModal();
    const [volador, setVolador] = useState(undefined);
    const [labels, setLabels] = useState([]);
    const [abejas, setAbejas] = useState([]);
    const [moscas, setMoscas] = useState([]);
    /* const [otros, setOtros] = useState([]); */
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

    const [primerAño, setPrimerAño] = useState("");
    const [segundoAño, setSegundoAño] = useState("");
    const años = [
        "",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
    ];
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
        ],
    };
    const dataRastrero = {
        labels: labels,
        datasets: [
            {
                label: "tijerilla",
                backgroundColor: "rgba(255,99,132,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: tijerilla,
            },
            {
                label: "roedor",
                backgroundColor: "rgba(155,231,91,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: roedor,
            },
            {
                label: "frailecillos",
                backgroundColor: " rgb(147, 61, 228,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: frailecillos,
            },
            {
                label: "mosca",
                backgroundColor: " rgb(117, 239, 248,0.5)",
                borderColor: " rgb(255, 255, 255))",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: mosca,
            },
            {
                label: "pinacate",
                backgroundColor: " rgb(61, 86, 228,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: pinacate,
            },
            {
                label: "cochinilla",
                backgroundColor: " rgb(211, 228, 61,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: cochinilla,
            },
            {
                label: "cucarachaAmericana",
                backgroundColor: " rgb(67, 228, 61,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: cucurachaAmericana,
            },
            {
                label: "cucarachaAlemana",
                backgroundColor: " rgb(228, 61, 61,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: cucurachaAlemana,
            },
            {
                label: "araña",
                backgroundColor: " rgb(228, 61, 186,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: araña,
            },
            {
                label: "hormiga",
                backgroundColor: " rgb(195, 61, 228,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: hormiga,
            },
            {
                label: "ciempies",
                backgroundColor: " rgb(61, 228, 172,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: ciempies,
            },
            {
                label: "alacran",
                backgroundColor: " rgb(61, 228, 172,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: alacran,
            },
            {
                label: "grillo",
                backgroundColor: " rgb(228, 183, 61,0.5)",
                borderColor: " rgb(255, 255, 255)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: grillo,
            },
        ],
    };

    const handleBuscar = async () => {
        if (Tipo === "" || primerAño === "" || segundoAño === "") {
            Swal.fire({
                icon: "warning",
                title: "Campos vacios",
            });
            return;
        }
        if (primerAño === segundoAño) {
            Swal.fire({
                icon: "warning",
                title: "Campos iguales",
            });
            return;
        }
        setLoading(true);
        const { data } = await Axios.post(`/graficas/ano/${idEmpresa}`, {
            tipo: Tipo,
            primerAño,
            segundoAño,
        });
        if (Tipo === "Voladores") {
            const labels = data.map((area) => {
                return area.año;
            });
            const abejas = data.map((area) => {
                return area.abeja;
            });
            const mosca = data.map((area) => {
                return area.mosca;
            });
            /* const otros = data.map((area) => {
        return area.otros;
      }); */
            setVolador(true);
            setLabels(labels);
            setAbejas(abejas);
            setMoscas(mosca);
            /* setOtros(otros); */
        } else {
            const labels = data.map((area) => {
                return area.año;
            });
            const tijerilla = data.map((area) => {
                return area.tijerilla;
            });
            const roedor = data.map((area) => {
                return area.roedor;
            });
            const frailecillos = data.map((area) => {
                return area.frailecillos;
            });
            const mosca = data.map((area) => {
                return area.mosca;
            });
            const pinacate = data.map((area) => {
                return area.pinacate;
            });
            const cochinilla = data.map((area) => {
                return area.cochinilla;
            });
            const cucarachaAmericana = data.map((area) => {
                return area.cucarachaAmericana;
            });
            const cucarachaAlemana = data.map((area) => {
                return area.cucarachaAlemana;
            });
            const araña = data.map((area) => {
                return area.araña;
            });
            const grillo = data.map((area) => {
                return area.grillo;
            });
            const hormiga = data.map((area) => {
                return area.hormiga;
            });
            const ciempies = data.map((area) => {
                return area.ciempies;
            });
            const alacran = data.map((area) => {
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
        setLoading(false);
    };
    return (
        <>
            <Grid container spacing={2} alignItems="center" style={{ marginBottom: 15 }}>
                <Grid item md={4}>
                    <TextField
                        fullWidth
                        select
                        label="Selecciona"
                        value={Tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        helperText="Seleccione tipo de estacion"
                    >
                        {estations.map((option, index) => (
                            <MenuItem key={index} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        select
                        label="Primer año"
                        value={primerAño}
                        onChange={(e) => {
                            setVer(false);
                            setPrimerAño(e.target.value);
                        }}
                        helperText="Seleccione el primer año"
                    >
                        {años.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        select
                        label="Segundo año"
                        value={segundoAño}
                        onChange={(e) => {
                            setVer(false);
                            setSegundoAño(e.target.value);
                        }}
                        helperText="Seleccione el segundo año"
                    >
                        {años.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
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
            {ver ? (
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
                        fileName={`${volador ? "Voladores" : "Rastreros"}-años`}
                        landscape={true}
                        ref={(component) => (pdfExportComponent = component)}
                    >
                        <Grid container justify="center">
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom>
                                    {`Graficas Anual de ${Tipo}`}
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
                                />
                            </Grid>
                        </Grid>
                    </PDFExport>
                </>
            ) : null}
        </>
    );
}

export default GraficasAnual;
