import { styled } from "@material-ui/core";
import Box from '@material-ui/core/Box';

export const RootContainer = styled(Box)(({theme})=>({
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
}));

