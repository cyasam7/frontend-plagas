import React from "react";
import { Typography } from "@material-ui/core";
import TableAreaAnualVolador from "./TableAreaAnualVolador";
import TableAreaAnualRastrero from "./TableAreaAnualRastrero";
function ContainerTablaAreaAnual({ revision, tipo }) {
  return (
    <>
      <div>
        {tipo === "Voladores" ? (
          <>
              <TableAreaAnualVolador  año={revision} titulo={"moscas"} />
              <TableAreaAnualVolador  año={revision} titulo={"abejas"} />
          </>
        ) : (
              <>
                <TableAreaAnualRastrero año={revision} titulo="tijerilla"/>
                <TableAreaAnualRastrero año={revision} titulo="roedor"/>
                <TableAreaAnualRastrero año={revision} titulo="frailecillos"/>
                <TableAreaAnualRastrero año={revision} titulo="mosca"/>
                <TableAreaAnualRastrero año={revision} titulo="pinacate"/>
                <TableAreaAnualRastrero año={revision} titulo="cochinilla"/>
                <TableAreaAnualRastrero año={revision} titulo="cucarachaAmericana"/>
                <TableAreaAnualRastrero año={revision} titulo="cucarachaAlemana"/>
                <TableAreaAnualRastrero año={revision} titulo="araña"/>
                <TableAreaAnualRastrero año={revision} titulo="grillo"/>
                <TableAreaAnualRastrero año={revision} titulo="hormiga"/>
                <TableAreaAnualRastrero año={revision} titulo="ciempies"/>
                <TableAreaAnualRastrero año={revision} titulo="alacran"/>
              </>
        )}
      </div>
    </>
  );
}

export default ContainerTablaAreaAnual;
