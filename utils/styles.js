import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const theme = createTheme({
  //kieu chu~
  typography: {
    h1: {
      fontSize: "2.2rem",
      fontWeight: "400",
      margin: "2rem 0",
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: "400",
      margin: "1rem 0",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: "400",
      margin: "1rem 0",
    },
  },
  //bang? mau`
  palette: {
    primary: {
      main: "#f0c000",
    },
    secondary: {
      main: "#208080",
    },
    error: {
      main: "#f04000",
    },
    background: {
      main: "#ffffff",
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  AppBar: {
    borderBottom: `1px solid ${theme.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));