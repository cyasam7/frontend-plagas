import React from 'react'
import { Typography,Container } from '@material-ui/core'
import CardArea from '../components/CardArea'

function Areas() {
    return (
        <Container>
            <Typography>
                Lista de Areas 
            </Typography>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
            <CardArea/>
        </Container>
    )
}

export default Areas
