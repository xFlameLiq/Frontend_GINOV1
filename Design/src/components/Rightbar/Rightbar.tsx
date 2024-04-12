import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  conversations_main_container,
  conversations_title,
  friends_group,
  image_list,
  photos_container,
  photos_main_container,
  photos_title,
  rightbar_content_container,
  rightbar_friends_container,
  rightbar_main_container,
  rightbar_title,
  rightbar_title_container,
} from "./Rightbar.styles";

const Rightbar = () => {
  return (
    <Box sx={rightbar_main_container}>
      <Box sx={rightbar_content_container}>
        <Box sx={rightbar_title_container}>
          <Typography sx={rightbar_title} component="h2">
            Online Friends
          </Typography>
        </Box>
        <Box sx={rightbar_friends_container}>
          <AvatarGroup max={4} sx={friends_group}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com//static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com//static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://material-ui.com//static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com//static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com//static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com//static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com//static/images/avatar/8.jpg"
            />
          </AvatarGroup>
        </Box>
        <Box sx={photos_main_container}>
          <Box>
            <Typography sx={photos_title} component="h2">
              Latest Photos
            </Typography>
          </Box>
          <Box sx={photos_container}>
            <ImageList cols={3} rowHeight={164} sx={image_list}>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
              </ImageListItem>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" />
              </ImageListItem>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
              </ImageListItem>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" />
              </ImageListItem>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" />
              </ImageListItem>
              <ImageListItem>
                <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" />
              </ImageListItem>
            </ImageList>
          </Box>
          </Box>
        <Box sx={conversations_main_container}>
            <Box>
              <Typography sx={conversations_title} component="h2">
                Latest Conversation
              </Typography>
            </Box>
            <Box >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
            </Box>
        
          </Box>
 
      </Box>
    </Box>
  );
};

export default Rightbar;
