import { SxProps, Theme } from "@mui/material";


export const appbar: SxProps<Theme> = {
    backgroundColor: (theme) => theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "static"
  }


export const options_container: SxProps<Theme> = {
    display: {
        mobile: "none",
        desktop: "flex",
    }
};

export const side_menu: SxProps = {
    color: "black",
    background: "white",
    borderRadius: "10%",
    display: {
        laptop: "block",
        desktop: "none",
    },
    transition: "background-color 0.3s ease", // Agregamos una transición suave para el cambio de color
    "&:hover": {
        background: "#6595E0", // Cambiamos el color de fondo a rojo al hacer hover
    },
};