import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Container } from './elements';

const AuthenticationLayout = ({children}) => {
    return (
       <Container component='main'>
           <CssBaseline />
           {children}
       </Container>
    )
}

export default AuthenticationLayout;
