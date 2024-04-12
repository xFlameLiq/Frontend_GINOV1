import { SxProps, Theme } from "@mui/material";

export const titleHome: SxProps<Theme> = {
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: {
            mobile: "red",
            tablet: "#07AFD9",
            laptop: "green",
            desktop: "orange",
        },
        wordBreak: "break-word",
  }

  export const btnLogin: SxProps<Theme> = {
    color: "cyan",
    backgroundColor: (theme) => theme.palette.testColor.main,
  }

