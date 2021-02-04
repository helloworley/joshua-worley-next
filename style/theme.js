import { createMuiTheme } from '@material-ui/core/styles';

const heading = {
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const themeStyles = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontFamily: {
    serif: "'Frank Ruhl Libre', Sans-Serif",
    sansSerif: "'Raleway', Sans-Serif"
  },
  boxShadows: {
    buttonPrimary: '0px 4px 7px 2px rgba(199, 190, 208, .45)',
    card: '0 10px 16px 0 rgba(0, 0, 0, 0.25)',
    cardHovered: '0 10px 16px 0 rgba(0, 0, 0, 0.45)',
  },
  backgroundImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  backgroundFilter: {
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
  },
  borderRadius: {
    card: '20px',
  },
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
  padding: {
    xs: '60px 20px',
    sm: '60px 40px',
    md: '60px 0',
  },
  colors: {
    text: '#000',
    abyss: '#3F4651',
    whisp: '#F5F5F5',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    line: '#C4C4C4',
    headings: '#5B5B5B',
    textUnfocused: '#C4C4C4',
    brandDark: '#535557',
    meta: '#B5B5B5',
    white: '#ffffff',
    sand: '#F2F0F0',
    link: '#CFA54E',
    linkHovered: '#AD8A40',
    linkGrey: '#3A3A3A',
    linkGreyHovered: '#676767',
    gray1: '#F4F4F4',
    gray100: '#F8F8F8',
    gray200: '#E5E5E5',
    gray300: '#D3D3D3',
    gray400: '#A5A5A5',
    gray500: '#646464',
    gray600: '#3B3D3C',
    gray700: '#2B2B28'
  },
  navHeight: {
    xs: '',
    sm: '',
    md: '80px',
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
  },
  content: {
    outer: {
      sm: {
        padding: '50px 20px',
      },
      md: {
        padding: '120px 20px',
      }
    },
    inner: {
      sm: {
        maxWidth: 800,
      },
      md: {
          maxWidth: 1000,
          margin: '0 auto',
      },
      lg: {
        maxWidth: 1400,
      },
      xl: {
        maxWidth: 1600,
      }
    },
  },
};

export default themeStyles;