// external imports 
import { ThemeProvider } from "@material-ui/core/styles";

// internal imports
import AppRoute from "./route";
import defaultTheme from "./themes/default";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoute />
    </ThemeProvider>

  );
}

export default App;
