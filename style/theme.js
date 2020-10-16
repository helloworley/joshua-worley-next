import { createMuiTheme } from '@material-ui/core/styles';

const heading = {
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const themeStyles = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  palette: {
    primary: '#333',
    line: '#C4C4C4'
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    line: '#C4C4C4',
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#333',
      dark: '#000'
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true
  }
};

export default themeStyles;