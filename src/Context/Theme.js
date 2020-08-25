import React from 'react'
import {ThemeProvider ,createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({

})
function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme
