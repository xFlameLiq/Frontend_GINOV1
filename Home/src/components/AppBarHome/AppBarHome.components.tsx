import { styled } from "@mui/material";

export const MenuDrawer = styled("div")(({ theme }) => ({
    //backgroundColor: theme.palette.testColor.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: "white",
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    }
  }));

  