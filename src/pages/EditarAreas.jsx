import React,{useState} from 'react'
import {TextField} from '@material-ui/core'

function EditarAreas() {
    const [nombreArea, setNombreArea] = useState("");

    return (
        <div>
            <TextField
            value={nombreArea}
            onChange={(e) => setNombreArea(e.target.value)}
            variant="outlined"
            fullWidth
            helperText="Nombre del area que estan las trampas del cliente"
            placeholder="Nombre"
          />
        </div>
    )
}

export default EditarAreas
