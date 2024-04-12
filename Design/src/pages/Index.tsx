import { ThemeProvider } from "@emotion/react"
import { useThemeContext } from "@hooks/useThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom"


const Index = () => {

  const {theme} = useThemeContext();

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Outlet/>
    </ThemeProvider>

    </>
  )
}

export default Index