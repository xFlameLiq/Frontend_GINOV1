import * as React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { theme } from "../utils/themes";
import CompButton from "./Button";


const NavBar = () => {
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
        <CompButton name={'Home'} route={'/'}/>
        </Toolbar>
        </AppBar>
        <Box
          component="div"
          sx={{
            height: "100px",
          }}
        ></Box>
      </ThemeProvider>
    </>
  );
};
export default NavBar;