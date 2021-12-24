import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// internal impports
import BROWSE_ROUTE from './paths';
import { LandingLayout } from '../layouts';
import { selectUser } from '../store';



const AppRoute = () => {
    const user = useSelector(selectUser);
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

                    return authenticated ?
                        user ?
                            <Route path={path} exact={exact} key={path} element={children} />
                            :
                            <Route path="*"
                                key="*"
                                element={<Navigate to="/login" />} />
                        :
                        <Route path={path} exact={exact} key={path} element={children} />;
                })}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute;
