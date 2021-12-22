import { styled } from "@material-ui/core";
import { Box } from "@material-ui/core";

export const FormContainerAuth = styled(Box)(({ theme }) => ({
    width: '80%',
    background: theme.palette.solid.white,
    boxShadow: '0px 0px 12px rgba(0,0,0,.07)',
    borderRadius: 10,
    maxWidth: '600px',
    padding: 30,
    [theme.breakpoints.down('sm')]: {
        maxWidth: '500px'
    },
    [theme.breakpoints.down('xs')]: {
        maxWidth: "350px",
        padding: 20,
    }

}));

export const FormImageContiner = styled(Box)(({ theme }) => ({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
}));