// external imports 
import { ThemeProvider } from "@material-ui/core/styles";

// internal imports
import AppRoute from "./route";
import defaultTheme from "./themes/default";
import StoreProvider from './store/store-provider';


function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={defaultTheme}>
        <AppRoute />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
