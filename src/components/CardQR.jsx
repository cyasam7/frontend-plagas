import React from "react";
import QRCode from "qrcode.react";
import { Typography } from "@material-ui/core";

function CardQR({ estacion }) {
  return (
    <div style={{ padding: 15 }}>
      <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        size="150"
        level="Q"
        renderAs="canvas"
        value={estacion._id}
      />
      <Typography>Tipo: {estacion.tipo}</Typography>
      <Typography>Dispositivo: {estacion.numero}</Typography>
    </div>
  );
}

export default CardQR;
