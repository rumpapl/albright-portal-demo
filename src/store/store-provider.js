import { Provider } from "react-redux";
import { reduxStore } from './redux/store';

const StoreProvider = ({ children }) => (
    <Provider store={reduxStore}>{children}</Provider>
);
export default StoreProvider;
