import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { sidebar_main_container } from "./Sidebar.styles";
import { AccountCircle, AdminPanelSettings, Build, Home, Nightlight, Storefront, SupervisorAccount } from "@mui/icons-material";

import { useThemeContext } from "@hooks/useThemeContext";



const Sidebar = () => {

  const {mode, toggleDarkMode} = useThemeContext();


  return (
    <Box sx={sidebar_main_container}>
      <Box position="fixed">
      <List >
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <Build/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <SupervisorAccount/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <AccountCircle/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/login">
            <ListItemIcon>
              <AdminPanelSettings/>
            </ListItemIcon>
            <ListItemText primary="Security" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDarkMode} >
            <ListItemIcon>
              <Nightlight/>
            </ListItemIcon>
            <Switch disabled checked={mode==="dark" ? true : false}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
