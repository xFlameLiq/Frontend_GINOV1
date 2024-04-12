import { Modal, styled } from "@mui/material";

export const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "0",

  }));

  export const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.5rem",
    color: "white",
    marginBottom: "1rem",
  }));