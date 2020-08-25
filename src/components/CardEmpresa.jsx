import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";
import {ErrorButton,WarningButton} from '../components/Buttons'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  subtitle: {
    marginBottom: 12,
  },
});

function CardEmpresa() {
  const styles = useStyles();
  return (
    <Card className={styles.subtitle}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Nombre de La empresa
        </Typography>
        <Typography className={styles.subtitle} color="textSecondary">
          Codigo: 17041611
        </Typography>
        <Typography variant="body2" component="p">
          Trabajadores: 2
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/empresas/area/1">
        <Button variant="contained">Seleccionar</Button>
        </Link>
        <Link to={`/empresas/editar/1`}>
        <WarningButton variant="contained" color={yellow[400]}>
          Editar
        </WarningButton>
        </Link>
        <ErrorButton variant="contained" color={red[400]}>
          Eliminar
        </ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardEmpresa;
