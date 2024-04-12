import { SxProps, Theme} from "@mui/material";

//STYLES
export const toolbar: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};

export const title_appbar: SxProps<Theme> = {
  color: "white",
  display: {
    mobile: "none",
    tablet: "block",
  },
};

export const icon_appbar = {
    color: "white",
    display: {
      mobile: "block",
      tablet: "none",
    },
  }

export const avatar_icons: SxProps<Theme> = {
  width: 24,
  height: 24,
};

export const avatar_userbox: SxProps<Theme> = {
  width: 24,
  height: 24,
};

export const input_search: SxProps<Theme> = {
  color: "black",
  width: "100%",

};





  