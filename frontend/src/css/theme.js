import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#52c7b8',
      main: '#009688',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    },
    typography: {
        button: {
          fontSize: 20,
          fontFamily: 'sans-serif'
        },
        body2: {
            fontFamily: 'sans-serif'
          },
        body1: {
            fontFamily: 'sans-serif'
          },
        subtitle1: {
            fontSize: 20,
            fontFamily: 'sans-serif',
            
        }
        
      },
  })

  export default theme  