// external imports
import {createTheme} from '@material-ui/core/styles';

// internal imports
import colors from './colors';
import screenBreakPoints from './breskpoints';

const defaultTheme = createTheme({
palette: colors,
breakpoints: screenBreakPoints,
});

export default defaultTheme
