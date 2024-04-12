// Extiende la interfaz PaletteOptions de Material-UI para incluir el color personalizado
declare module "@mui/material/styles" {
  interface PaletteOptions {
    [key: string]: object | string | number // Acepta cualquier propiedad de tipo string
  }
  interface Palette {
    [key: string]: {
      main: string;
      light: string;
      dark: string;
      warning: string;
      info: string;
      success: string;
      contrastText: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    xldesktop: true;
  }
}

export const theme = {
  typography: {
    fontFamily: 'Roboto,Times New Roman, sans-serif',
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
      xldesktop: 1536,
    },
  },
  palette: {
    primary: {
      main: "#07AFD9",
    },
    secondary: {
      main: "#076CD9",
    },
    testColor: {
      main: "#DB544A",
    },
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    mode: "light",

  },

};
