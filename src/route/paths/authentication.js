import  {Login}  from "../../pages/authentication";
import  {AuthenticationLayout}  from "../../layouts";


const AUTHENTICATION_ROUTE=[
    {
        path: '/login',
        exact: true,
        component: Login,
        layout: AuthenticationLayout,

    },
];
export default AUTHENTICATION_ROUTE;