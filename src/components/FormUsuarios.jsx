import React from "react";
import {
  Paper,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import { WarningButton, SuccessButton } from "../components/Buttons";
import { useHistory } from "react-router-dom";
const usuarios = [
  {
    value: "Gerente",
    label: "Gerente",
  },
  {
    value: "Supervisor",
    label: "Supervisor",
  },
  {
    value: "Tecnico",
    label: "Tecnico",
  },
  {
    value: "Cliente",
    label: "Cliente",
  },
];

function FormUsuarios({ error, formik }) {
  const history = useHistory();

  return (
    <Paper style={{ padding: 15 }} variant="outlined">
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        name="nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        placeholder="Nombre"
        margin="normal"
        fullWidth
        label="Nombre"
        variant="outlined"
      />
      <TextField
        error={error}
        InputLabelProps={{
          shrink: true,
        }}
        name="apellido"
        value={formik.values.apellido}
        onChange={formik.handleChange}
        placeholder="Apellido"
        margin="normal"
        fullWidth
        label="Apellido"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        name="email"
        error={formik.errors.email && formik.touched.email}
        helperText={
          formik.errors.email && formik.touched.email
            ? formik.errors.email
            : null
        }
        value={formik.values.email}
        onChange={formik.handleChange}
        margin="normal"
        label="Email"
        placeholder="Email"
        variant="outlined"
        fullWidth
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        margin="normal"
        fullWidth
        placeholder="Contraseña"
        label="Contraseña"
        type="password"
        variant="outlined"
      />
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        error={error}
        name="telefono"
        value={formik.values.telefono}
        onChange={formik.handleChange}
        margin="normal"
        fullWidth
        placeholder="Telefono"
        label="Telefono"
        variant="outlined"
      />
      <TextField
        error={error}
        fullWidth
        select
        name="tipo_usuario"
        value={formik.values.tipo_usuario}
        onChange={formik.handleChange}
        label="Selecciona"
        helperText="Selecciona tipo de Usuario"
      >
        {usuarios.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormControlLabel
        name="isTrabajando"
        control={
          <Checkbox
            checked={formik.values.isTrabajando}
            onChange={formik.handleChange}
          />
        }
        label="¿Trabaja actualmente?"
      />
      <Grid container justify="space-between" margintop={2}>
        <Grid>
          {error ? (
            <Typography variant="subtitle2" color="error">
              Revisa bien los datos o correo repetido
            </Typography>
          ) : null}
        </Grid>
        <Grid>
          <WarningButton onClick={() => history.goBack()}>Volver</WarningButton>
          <SuccessButton onClick={formik.handleSubmit}>Guardar</SuccessButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FormUsuarios;
