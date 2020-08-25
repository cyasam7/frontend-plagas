import React from "react";
import {
  Card,
  CardContent,
  Box,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import {
  SuccessButton,
  WarningButton,
  ErrorButton,
} from "../components/Buttons";
const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "Space",
  },
});
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
              <WarningButton>Editar</WarningButton>
              <ErrorButton>Eliminar</ErrorButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardArea;
