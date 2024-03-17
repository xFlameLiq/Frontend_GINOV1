import { SxProps, Theme } from "@mui/material";

export const getAllPostContainer: SxProps<Theme> = {
    backgroundColor: '#3470d1',
    width: '90%',
    margin: '0px auto',
    border: 1,
    wordWrap: 'break-word'

};

export const mockCardData: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    padding: "1rem 2rem 0rem",
    gap: "2rem"

};