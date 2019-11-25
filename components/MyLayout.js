
import { Container, Row, Col } from 'react-grid-system';
import Navigation from './Navigation';
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { Box } from 'rebass'
import { Grid, Hidden } from '@material-ui/core/';

import MobileNav from './MobileNav';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} {...props}>
      <MobileNav />
      <Grid container spacing={3}>
        <Grid item md={2}>
        <Hidden smDown>
          <Navigation />
        </Hidden>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box
            p={4}
            width={[0, 1 / 6]}
            bg=''>

          </Box>
          <Box
            p={4}
            width={[1, 5 / 6]}
            bg=''
            sx={{
              overflow: 'auto'
            }}
          >
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


import { makeStyles } from '@material-ui/core/styles';


export default Layout;