import { SxProps, Theme } from "@mui/material";

// STYLES
export const sidebar_main_container: SxProps<Theme> = {

    flex: {
        //Grow Shrink Basis
        tablet: "0 0 9rem",
        laptop: "0 0 12rem",
    },

    padding: "1rem",
    display: {
      mobile: "none",
      tablet: "block",
    },

  };
