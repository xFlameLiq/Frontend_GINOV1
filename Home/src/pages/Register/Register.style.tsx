import { SxProps, Theme } from "@mui/material";

export const sxBtn: SxProps<Theme> = {
    border: 1,
    mt: "10px",
    mb: "30px",
    padding: "2rem",
    backgroundColor: {
        xs: 'green',
        sm: 'yellow',
        md: 'blue',
        lg: 'red',
        xl: 'cyan',
    }
  }