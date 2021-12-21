import Box from "@material-ui/core/Box";
import { withStyles, styled } from "@material-ui/core/styles";

export const DrawerHeader=styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))