import * as Yup from "yup";

export const usuario = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Muy Corto")
    .max(50, "Muy Largo")
    .required("Este campo es requerido"),
  apellido: Yup.string()
    .min(2, "Muy Corto")
    .max(50, "Muy Largo")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("Email invalido")
    .required("Este campo es requerido"),
  password: Yup.string()
    .min(2, "Muy Corto")
    .max(50, "Muy Largo")
    .required("Este campo es requerido"),
  telefono: Yup.string()
  .min(2, "Muy Corto")
  .max(50, "Muy Largo")
  .required("Este campo es requerido"),
  tipo_usuario: Yup.string()
  .min(2, "Muy Corto")
  .max(50, "Muy Largo")
  .required("Este campo es requerido"),
  isTrabajando: Yup.bool(),
});
