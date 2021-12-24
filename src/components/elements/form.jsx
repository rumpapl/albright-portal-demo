import { withStyles, styled } from "@material-ui/styles";
import MuiFormLabel from "@material-ui/core/FormLabel";


export const FormLabel = withStyles((theme) => ({
    root: {
        color: theme.palette.primary.main,
        fontSize: theme.typography.pxToRem(12),
        marginBottom: 5,

    },
    asterisk: {
        color: theme.palette.error.main,
    },
}))(MuiFormLabel);