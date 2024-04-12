import { SxProps, Theme } from "@mui/material";

export const main_container: SxProps<Theme> = {
    wordBreak: "break-word",

};

export const section_container: SxProps<Theme> = {
    backgroundColor: "cornflowerblue",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
};

export const section_title: SxProps<Theme> = {
    wordBreak: "break-word",
    textAlign: "center",
};

export const body_container: SxProps<Theme> = {
    marginTop: "100px",
};

export const parent: SxProps<Theme> = {
    backgroundColor: "red",

};

export const children: SxProps<Theme> = {
    backgroundColor: "darksalmon",
    position: "fixed",
    width: "60%",
    display: "flex",
    justifyContent: "space-between"
};

export const body: SxProps<Theme> = {
    backgroundColor: "burlywood",
    height: "330rem",
};
