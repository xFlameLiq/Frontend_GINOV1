import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";

import { theme } from "../utils/themes";


type Props = {
  name: string;
  route: string;
};

const CompButton = ({ name, route }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="secondary"
            href={route}
            sx={{
              width: "10rem",
              mr: "1rem"
            }}
          >
            {name}
          </Button>
         
      </ThemeProvider>
    </>
  );
};

export default CompButton;
