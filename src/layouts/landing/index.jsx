import React from 'react';

// internal imports
import { RootContainer } from './elements';

const LandingLayout = ({ children }) => {
    return (
        <RootContainer>
            <>
                <h1>langing layout</h1>
                <br />
                <br />
                {children}
            </>
        </RootContainer>
    )
}

export default LandingLayout;
