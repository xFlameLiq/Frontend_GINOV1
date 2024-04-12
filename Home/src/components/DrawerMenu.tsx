
import {
  Box,

  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CompButton from "./Button";
import { MenuOptions } from "@utils/MenuOptions";

type Props = {
  toggleDrawer: (value: boolean) => void;
};

const menuOptions = MenuOptions();

const DrawerMenu = ({ toggleDrawer }: Props) => {
  return (
    <Box
      sx={{ width: 250, display: "flex", justifyContent: "center"}}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      aria-label="prueba"
    >
      <List >
        {menuOptions.map((option) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CompButton name={option.name} route={option.route} />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerMenu;
