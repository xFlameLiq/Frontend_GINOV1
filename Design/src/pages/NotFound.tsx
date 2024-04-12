import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Container
        maxWidth="xldesktop"
        sx={{
          textAlign: "center",
        }}
      >
        <Box component="div">
          <Box component="div">{error.data}</Box>
          <Box component="div" sx={{}}>
            <Typography component="p" variant="body1" color="initial">
              {error.statusText}
            </Typography>
            <Typography component="p" variant="body1" color="initial">
              {error.status}
            </Typography>
          </Box>
        </Box>
        <Button variant="contained">
            <NavLink to="/">Volver a Home</NavLink>
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
