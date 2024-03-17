import { SxProps, Theme } from "@mui/material";

export const CreateNewPostContainer: SxProps<Theme> = {
    backgroundColor: '#5ed134',
    width: '90%',
    margin: '0px auto',
    border: 1,
    wordWrap: 'break-word'
};

export const divInputs: SxProps<Theme> = {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    width: '90%',
    margin: '0px auto',
    wordWrap: 'break-word',
    mb: "1rem"
};

export const inputs: SxProps<Theme> = {
    width: '100%'
};

export const description: SxProps<Theme> = {
    mr: "2rem",
    width: "10%"
};

export const submitBtn: SxProps<Theme> = {
    display: "block",
    width: "20rem",
    margin: "auto",
    mb: "1rem"
}
