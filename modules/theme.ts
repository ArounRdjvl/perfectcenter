import { createTheme } from '@mui/material/styles'
export const colors = {
  beige: '#E3CCB4',
  noir: '#3B424A',
  vert: '#849994',
}

export function getTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#3B424A',
      },
      secondary: {
        main: '#849994',
        contrastText: '#fff',
      },
      text: {
        primary: '#3B424A',
        secondary: '#EBEAE8',
      },
    },
    typography: {
      h1: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1.3rem',
      },
      body1: {
        fontSize: '1.1rem',
      },
      body2: {
        fontSize: '0.9rem',
      },
      fontFamily: 'Louis George Café, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            textTransform: 'none',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#3B424A',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          underline: {
            '&:before, &:after ,&:hover:not(.Mui-disabled):before': {
              borderBottomColor: colors.vert,
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          underlineHover: {
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            'html,body,body > div:first-child,div#__next': {
              backgroundColor: '#EBEAE8',
            },
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
          },
        },
      },
    },
  })
}
