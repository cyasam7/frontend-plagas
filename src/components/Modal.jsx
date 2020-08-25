import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
function Modal({ children, titulo, abierto, handleCerrar}) {
  return (
    <Dialog open={abierto}>
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Modal;
