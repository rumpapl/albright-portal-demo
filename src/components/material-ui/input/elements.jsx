import { styled } from "@material-ui/core";
import { Box, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export {
    FormLabel
} from '../../elements';

export const InputContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: "column",

}));

export const OutlinedTextField = withStyles((theme) => ({
    root: {
        marginTop: 10,
        "& .MuiInputBase-root": {
            "& fieldset": {
                padding: 12.9,
                borderRadius: 10,
                border: "0.5px solid #BABAC2",
                fontSize: theme.typography.pxToRem(14),
                transition: theme.transitions.create(["border-color", "box-shadow"]),
            },
            "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
                borderWidth: ".5px",
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
                borderWidth: ".5px",
            },
            "& .MuiInputBase-input ": {
                borderRadius: 10,
            }
        },
    },
    error: {
        borderRadius: 10,
        border: `0.5px solid ${theme.palette.error.main}`,
    },
}))(TextField);