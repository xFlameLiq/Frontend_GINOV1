import { styled } from "@mui/material";

//STYLED COMPONENTS
export const UserBox = styled("div")(({ theme }) => ({

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: "white",
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    }
  }));

export const IconsContainer = styled("div")(({ theme }) => ({
    //backgroundColor: theme.palette.testColor.main,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    color: "white",
    [theme.breakpoints.up("tablet")]: {
      display: "flex",
    }
  }));
  
export const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));