import React from "react";
import { Card, CardContent, Box, Typography, Button } from "@material-ui/core";
import { WarningButton, ErrorButton } from "../components/Buttons";
import { Link } from "react-router-dom";
function CardArea() {
  return (
    <Box m={1}>
      <Card>
        <CardContent>
          <Box display="flex">
            <Box alignContent="center" flexGrow={1}>
              <Typography>Nombre: Sucursal Numero 1</Typography>
            </Box>
            <Box>
              <Link to={`/areas/editar/2`}>
                <WarningButton>Editar</WarningButton>
              </Link>
              <ErrorButton>Eliminar</ErrorButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardArea;
