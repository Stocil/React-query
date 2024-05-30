import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { indigo, pink } from "@mui/material/colors";

type ThemeProps = {
  children: React.ReactNode;
};

declare module "@mui/material/styles" {
  interface Palette {
    typography: Palette["primary"];
  }

  interface PaletteOptions {
    typography?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

export function Theme({ children }: ThemeProps) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: indigo[200],
      },
      secondary: {
        main: pink[100],
      },
      typography: {
        main: indigo[200],
      },
      background: {
        default: "#141414",
        paper: "#212121",
      },
    },

    typography: {
      fontFamily: "'Inter', sans-serif",
    },
    shape: {
      borderRadius: 10,
    },

    components: {
      MuiContainer: {
        defaultProps: {
          component: "section",
          maxWidth: "lg",
        },
        styleOverrides: {
          root: {
            marginTop: 8,
            marginBottom: 4,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        variants: [
          {
            props: { variant: "gradient" },
            style: ({ theme }) => ({
              backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 0%, #eda7f1  51%, ${theme.palette.primary.main}  100%)`,
              transition: "0.5s",
              backgroundSize: "200% auto",
              ":hover": {
                backgroundPosition: "right center",
              },
            }),
          },
        ],
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
