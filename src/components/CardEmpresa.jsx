import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { ErrorButton, WarningButton } from "../components/Buttons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  subtitle: {
    marginBottom: 12,
  },
});

function CardEmpresa({ empresa, eliminar }) {
  const styles = useStyles();

  const handleEliminar = () => {
    eliminar(empresa._id);
  };
  return (
    <Card className={styles.subtitle}>
      <CardContent>
        <Typography variant="h6">Nombre: {empresa.nombre}</Typography>
        <Typography className={styles.subtitle} color="textSecondary">
          Codigo: {empresa.noCliente}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/empresas/editar/${empresa._id}`}>
          <WarningButton>Editar</WarningButton>
        </Link>
        <ErrorButton onClick={handleEliminar}>Eliminar</ErrorButton>
        <Link to={`/empresas/trabajadores/${empresa._id}`}>
          <Button variant="outlined" color="primary">
            Contactos
          </Button>
        </Link>
        <Link to={`/empresas/agregar/contacto/${empresa._id}`}>
          <Button variant="contained" color="primary">
            Agregar Contacto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEmpresa;
