
import TopNavigation from './TopNavigation';
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
  content: {
    margin: '95px 0 0',
    width: '100%',
  },
  rightPannel: {
    overflow: 'auto',
    padding: '120px 0 0',
    [theme.breakpoints.up('md')]: {
      padding: '108px 0 0',
      height: '100vh',
    },
  },
  normalizeGridItem: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <>
      <MobileNav />

      <div className={classes.root}>
        
        <Hidden smDown>
          <TopNavigation menuColor={props.menuColor} />
        </Hidden>

        <div className={classes.content}>
          {props.children}
        </div>        

      </div>
      </>
  );
}


export default Layout;