import { SxProps, Theme } from "@mui/material";

export const rightbar_main_container: SxProps<Theme> = {
  width: {
    tablet: "40%",
    desktop: "20%",
  },
  padding: "1rem",
  display: {
    mobile: "none",
    tablet: "block",
  },

};


export const rightbar_content_container: SxProps<Theme> = {

    position: "fixed",
    width: "auto",
    padding: "1rem",
    margin: "auto",
  }

  export const rightbar_title_container: SxProps<Theme> = {

    fontWeight: "300",
    fontSize: "1.3rem",
  };


  export const rightbar_title: SxProps<Theme> = {

    fontWeight: "300",
    fontSize: "1.3rem",
  };

export const rightbar_friends_container: SxProps<Theme> = {
  marginBottom: "1rem"

};

  export const friends_group: SxProps<Theme> = {
    justifyContent: "flex-end",

  };

  export const photos_main_container: SxProps<Theme> = {

  };
  
  export const photos_title: SxProps<Theme> = {
    fontWeight: "300",
    fontSize: "1.3rem",
  };

  export const photos_container: SxProps<Theme> = {
    marginBottom: "1rem"
  };


  export const image_list: SxProps<Theme> = {
    margin: "0",
  };

  export const conversations_main_container: SxProps<Theme> = {

  };

  export const conversations_title: SxProps<Theme> = {
    fontWeight: "300",
    fontSize: "1.3rem",
  };

  