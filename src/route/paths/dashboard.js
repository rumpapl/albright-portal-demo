import { lazy } from "react";


const DashboardRoot = lazy(()=> import('../../pages/dashboard/root'));

const DASHBOARD_ROUTE=[
    {
        path: '/',
        exact: true,
        authenticated: true,
        component: DashboardRoot,
    },
];
export default DASHBOARD_ROUTE;