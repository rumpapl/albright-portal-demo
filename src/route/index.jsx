import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// internal impports
import BROWSE_ROUTE from './paths';
import { LandingLayout } from '../layouts';


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {BROWSE_ROUTE.map((item) => {
                    const { path, component, exact, layout, authenticated } = item;
                    const Layout = layout || LandingLayout;
                    const Component = component || Fragment;

                    const children = (
                        <Layout>
                             <Suspense fallback={<div>Loading...</div>}>
                            <Component />
                            </Suspense>
                        </Layout>
                    );

                    return (
                         <Route path={path} exact={exact} key={path} element={children}/>)
                })}
            </Routes>
        </BrowserRouter>
    )
}

AppRoute.propTypes = {

}

export default AppRoute;
