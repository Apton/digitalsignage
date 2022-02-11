import { createMuiTheme } from '@material-ui/core/styles';

const Poppins = "'Poppins', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1c1d',
    },
    secondary: {
      main: '#CECECE ',
    },
  },
  typography: {
    fontFamily: Poppins,
    textTransform: 'none',
    fontWeightLight: '600',
    fontWeight:"600",

  },
  overrides: {
    MuiButtonContained: {

      backgroundColor: '#B50717',
    },
    MuiTypography: {
      body1: {
        fontWeight: 300,
        fontSize: '15px',
        '@media (min-width:600px)': {
          fontSize: '25px',
        },
      },
      h4: {
        fontWeight: 300,
        fontSize: '12px',
        '@media (min-width:600px)': {
          fontSize: '20px',
        },
      },
      h1: {
        fontWeight: 300,
        fontSize: '30px',
        '@media (min-width:600px)': {
          fontSize: '60px',
        },
      },
      h2: {
        fontSize: '22px',
        '@media (min-width:600px)': {
          fontSize: '44px',
        },
      },
      h3: {
        fontWeight: 300,
        fontSize: '15px',
        '@media (min-width:600px)': {
          fontSize: '30px',
        },

      },
      h5: {
        fontWeight: 300,
      },
      h6: {
        fontWeight: 300,
      },

    },
    MuiInputBase: {
      root: {
        color: '##131313',

      },
      outlined: {
        color: '#131313',

      },
      MuiInputLabel: {
        root: {
          color: '#ECECEC',
          fontSize: '25',

        },
      },

    },
    MuiIconButton: {
      root: {
        padding: '0px',
        '@media (min-width:600px)': {
          padding: '12px',
        },
      },
    },
    MuiOutlinedInput: {
      borderColor: '#ECECEC',
      notchedOutline: {
        borderColor: '#ECECEC',
      },
      root: {
        Mui: {
          focused: {
            borderColor: '#ECECEC',
          },
        },
      },

    },

  },
  MuiCssBaseline: {
    '@global': {
      '@font-face': [Poppins],
    },
  },
});

export default theme;
