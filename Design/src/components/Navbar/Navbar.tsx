import { MailLock, Notifications, Settings } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import {avatar_icons, avatar_userbox, icon_appbar, input_search, title_appbar, toolbar } from "./Navbar.styles";
import { IconsContainer, Search, UserBox } from "./Navbar.components";


const Navbar = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={toolbar}
      >
        <Typography
          variant="h6"

          sx={title_appbar}
        >
          TESTING
        </Typography>
        <Settings
          sx={icon_appbar}
        />
        <Search>
          <InputBase placeholder="search..." sx={input_search}/>
        </Search>
        <IconsContainer>
          <MailLock />
          <Notifications />
          <Avatar src="https://approachableai.com/wp-content/uploads/2022/12/AIPortraitExample-scaled.jpg" 
            onClick={() => setOpen(true)}
          sx={avatar_icons}/>
        </IconsContainer>
        <UserBox onClick={() => setOpen(true)}>
        <Avatar src="https://approachableai.com/wp-content/uploads/2022/12/AIPortraitExample-scaled.jpg" sx={avatar_userbox}/>
        <Typography variant="body1" color="initial">John Smith</Typography>
        </UserBox>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
