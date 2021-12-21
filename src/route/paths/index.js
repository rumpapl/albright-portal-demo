import ABOUT_ROUTE from "./about";
import DASHBOARD_ROUTE from "./dashboard";
import AUTHENTICATION_ROUTE from "./authentication";


const BROWSE_ROUTE = [
    ...AUTHENTICATION_ROUTE,
    ...ABOUT_ROUTE,
    ...DASHBOARD_ROUTE,

];
export default BROWSE_ROUTE;