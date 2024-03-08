import * as React from "react";
import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { theme } from "../utils/themes";
import CompButton from "./Button";





const CompAppBarHome = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

          }}
        >
        <Toolbar>
        <CompButton name={'Login'} route={'/login'}/>
        <CompButton name={'Registro'} route={'/register'}/>
        <CompButton name={'Weather App'} route={'/weather-app'}/>
        <CompButton name={'Pokedex App'} route={'/pokedex-app'}/>
        <CompButton name={'TansTack App'} route={'/tanstack-query'}/>
        </Toolbar>
        </AppBar>
        <Box
          component="div"
          sx={{
            height: "120px",
          }}
        ></Box>
      </ThemeProvider>
    </>
  );
};
export default CompAppBarHome;
