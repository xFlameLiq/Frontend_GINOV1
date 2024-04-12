
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import Box from "@mui/material/Box";

import CompButton from "./Button";


const NavBar = () => {
  return (
    <>

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

    </>
  );
};
export default NavBar;