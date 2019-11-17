import {
  ThemeProvider as MUIThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import React from "react";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)"
    }
  }
});

const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
export default ThemeProvider;
