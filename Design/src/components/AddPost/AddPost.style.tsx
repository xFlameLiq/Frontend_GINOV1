import { SxProps, Theme } from "@mui/material";

export const add_post_style: SxProps<Theme> = {
  position: "fixed",
  bottom: {
    mobile: "20px",
  },
  left: {
    mobile: "calc(50% - 25px)",
    tablet: "30px",
  },
};

export const create_new_post: SxProps<Theme> = {
  width: "800px",
  height: "400px",
  backgroundColor: "background.default",
  padding: "3rem",
  borderRadius: "5%",
};

export const create_post_title: SxProps<Theme> = {
  fontWeight: "500",
  textAlign: "center",
  fontSize: "1.8rem",
};

export const avatar_userbox: SxProps<Theme> = {
  width: 24,
  height: 24,
};

export const content_post_field: SxProps<Theme> = {
  width: "100%",
  marginBottom: "1rem",
};

export const content_icons: SxProps<Theme> = {
  flexDirection: "row",
  gap: "0.5rem",
  marginBottom: "1rem",
};

export const posting_btn: SxProps<Theme> = {
  width: "80%",
};

export const report_btn: SxProps<Theme> = {
  width: "20%",
};
