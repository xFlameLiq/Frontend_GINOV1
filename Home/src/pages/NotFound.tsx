import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CompButton from "@components/Button";
import { useThemeContext } from "@hooks/useThemeContext";

const NotFound = () => {
  const {theme} = useThemeContext();
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          border: 1,
          mt: "10rem",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h1" color="initial">
            {error.statusText}
          </Typography>
          <ReportGmailerrorredIcon color="warning" fontSize="large" />
          <Typography variant="body1" color="initial">
            {error.status}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              mb: "30px",
            }}
          >
            {error.data}
          </Typography>
          <Box
            component="div"
            sx={{
              mb: "30px",
            }}
          >
            <CompButton name={"Home"} route={"/"} />
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </>
  );
};

export default NotFound;
