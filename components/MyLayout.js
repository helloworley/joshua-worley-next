
import Navigation from './Navigation';
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import MobileNav from './MobileNav';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainerCustomizations: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    paddingBottom: '0 !important'
  },
  rightPannel: {
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
    overflow: 'auto',
    padding: '108px 0 0',
  },
  normalizeGridItem: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important'
  },
  navContainer: {
    margin: '80px 0 0',
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <>
      <MobileNav />

      <Grid container spacing={4} className={classes.root}>
        <Grid item md={3} lg={2} className={classes.normalizeGridItem}>
          <Hidden smDown>
            <div className={classes.navContainer}>
              <Navigation menuColor={props.menuColor} />
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={9} lg={10} className={`${classes.gridCustomizations} ${classes.normalizeGridItem}`}>
          <div className={classes.rightPannel}>
            {props.children}
          </div>
        </Grid>
      </Grid>
      </>
  );
}


export default Layout;