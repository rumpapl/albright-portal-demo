// external imports
import {createTheme} from '@material-ui/core/styles';

// internal imports
import colors from './colors';
import screenBreakPoints from './breskpoints';
import typography from './typography';

const defaultTheme = createTheme({
palette: colors,
breakpoints: screenBreakPoints,
typography: typography,
});

export default defaultTheme
