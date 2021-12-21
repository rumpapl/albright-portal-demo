import { styled } from "@material-ui/core/styles";
import {Box} from '@material-ui/core';

export const Container=styled(Box)(({theme})=>({
    height: "100vh",
    width: "100%", 
    display: 'grid',
    placeItems: 'center',
    background: theme.palette.background.default,
}));