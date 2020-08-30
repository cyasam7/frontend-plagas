import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
} from "@material-ui/core";
import { WarningButton, ErrorButton } from "../components/Buttons";
import { Link } from "react-router-dom";
function CardArea({ area, eliminar }) {
  const handleEliminar = () => {
    eliminar(area._id);
  };
  return (
    <Box m={1}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">
            Nombre: {""}
            <Typography variant="overline">{area.nombre}</Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/areas/editar/${area._id}`}>
            <WarningButton>Editar</WarningButton>
          </Link>
          <ErrorButton onClick={handleEliminar}>Eliminar</ErrorButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardArea;
