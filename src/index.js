import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import theme from "./Theme/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import GlobalStyle from "./assets/GlobalStyling/Global";
const Theme = createTheme(theme);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles styles={GlobalStyle} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
