import { SxProps, Theme } from "@mui/material";

export const sxCard: SxProps<Theme> = {
  mb: "2rem",
};

export const divData: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  mb: "1rem",
};

export const searchUser: SxProps<Theme> = {
    width: "20%",
    mr: "2rem"
};

export const searchDiv: SxProps = {

    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding: "0rem 1rem 1rem"

};

export const searchContainer: SxProps = {

    border: 1,
    
};

export const btnSearch: SxProps<Theme> = {

    width: "15%"

};


export const errorId: SxProps = {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding: "1rem 1rem 0rem",
    mb: "0.4rem"

};

export const divUsers: SxProps<Theme> = {
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: "repeat(3, 1fr)",
        },
        backgroundColor: {
            xs: 'green',
            sm: 'yellow',
            md: 'blue',
            lg: 'red',
            xl: 'cyan',
        }
};

export const cardUser: SxProps<Theme> = {
    maxWidth: {
        xs: 350,
        sm: 350,
        md: 350,
        lg: 350,
        xl: 350,
    }, 
    mb: "2rem" 
}