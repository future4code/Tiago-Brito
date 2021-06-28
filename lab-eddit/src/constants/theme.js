  
import { createMuiTheme } from '@material-ui/core/styles/'
import { pastelColor, grayScale, offWhite} from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: pastelColor,
            contrastText: offWhite
        },
        text: {
            primary: grayScale
        }
    }
})

export default theme