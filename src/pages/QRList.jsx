import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import CardQR from "../components/CardQR";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

class App extends React.Component {
  state = {
    estaciones: [],
  };
  pdfExportComponent;

  componentDidMount() {
    const idEmpresa = this.props.match.params.idEmpresa;
    const idArea = this.props.match.params.idArea;
    this.handleFetchEstaciones(idEmpresa, idArea).then((data) => {
      this.setState({
        estaciones: data,
      });
    });
  }
  handleFetchEstaciones = async (idEmpresa, idArea) => {
    const { data } = await Axios.get(
      `/estacion?empresa=${idEmpresa}&area=${idArea}`
    );
    return data;
  };
  render() {
    return (
      <>
        <Button
        fullWidth
          color="primary"
          variant="outlined"
          onClick={() => {
            this.pdfExportComponent.save()
          }}
        >
          Export PDF
        </Button>

        <PDFExport
          paperSize="A4"
          margin="1cm"
          ref={(component) => (this.pdfExportComponent = component)}
        >
          <Grid container>
            {this.state.estaciones.map((estacion, index) => (
              <Grid key={index} item md={4}>
                <CardQR estacion={estacion} />
              </Grid>
            ))}
          </Grid>
        </PDFExport>
      </>
    );
  }
}
export default withRouter(App);
