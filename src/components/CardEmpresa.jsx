import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {ErrorButton,WarningButton} from '../components/Buttons'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  subtitle: {
    marginBottom: 12,
  },
});

function CardEmpresa({empresa, eliminar}) {
  const styles = useStyles();

  const handleEliminar = () =>{
    eliminar(empresa._id)
  }
  return (
    <Card className={styles.subtitle}>
      <CardContent>
        <Typography variant="h6">
          Nombre: {" "}{empresa.nombre} 
        </Typography>
        <Typography className={styles.subtitle} color="textSecondary">
          Codigo: {" "}{empresa.noCliente} 
        </Typography>
        <Typography variant="body2" component="p">
          Trabajadores: {" "}{empresa.trabajadores.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/empresas/editar/${empresa._id}`}>
        <WarningButton>
          Editar
        </WarningButton>
        </Link>
        <ErrorButton onClick={handleEliminar}>
          Eliminar
        </ErrorButton>
      </CardActions>
    </Card>
  );
}

export default CardEmpresa;
