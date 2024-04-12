import { AppBar, Button, Toolbar, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import CompButton from "../Button";
import { Menu } from "@mui/icons-material";
import { appbar, options_container, side_menu } from "./AppBarHome.styles";
import { useState } from "react";
import DrawerMenu from "@components/DrawerMenu";
import { MenuOptions } from "@utils/MenuOptions";

const menuOptions = MenuOptions();

const CompAppBarHome = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar sx={appbar}>
        <Toolbar>
          <Box sx={options_container} aria-label="id">
            {menuOptions.map((option) => (
              <CompButton name={option.name} route={option.route} />
            ))}
          </Box>
          <Box>
            <Button variant="text" onClick={toggleDrawer(true)}>
              <Menu sx={side_menu} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <DrawerMenu toggleDrawer={toggleDrawer} />
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default CompAppBarHome;
