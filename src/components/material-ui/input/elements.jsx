import { styled } from "@material-ui/core";
import { Box, TextField } from "@material-ui/core";
import MuiOutlinedInput from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/styles";


// internal imports
export {
  FormLabel
} from '../../elements';

export const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",

}));

export const OutlinedTextField = withStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      "& fieldset": {
        borderRadius: 10,
        border: "0.5px solid #BABAC2",
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
        fontSize: theme.typography.pxToRem(12),
        padding: 10,
      }
    },
  },
  error: {
    borderRadius: 10,
    border: `0.5px solid ${theme.palette.error.main}`,
  },
}))(TextField);

export const OutlinedInput = withStyles((theme) => ({
  root: {
    borderRadius: 10,
    fontSize: theme.typography.pxToRem(12),
    "&$focused $notchedOutline": {
      borderWidth: ".5px",
    },
    "&:hover $notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
  input: {
    padding: 10,
  },
  focused: {},
  notchedOutline: {
    borderWidth: 0.5,
  },
}))(MuiOutlinedInput);
