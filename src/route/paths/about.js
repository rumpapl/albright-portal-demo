import {lazy} from 'react';

const Aboutroot = lazy(()=> import("../../pages/about/root"));

const ABOUT_ROUTE = [
    {
        path: '/about',
        exact: true,
        authenticated: true,
        component: Aboutroot,
    },
];
export default ABOUT_ROUTE;
