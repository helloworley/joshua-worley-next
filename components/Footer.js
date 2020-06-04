import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundPosition: 'center',
  },
  centeredWrapper: {
    width: '100%',
    margin: '20px auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
  copyRightText: {
    color: 'rgba(0,0,0,.2)',
    textAlign: 'center',
    margin: '0 auto'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.centeredWrapper}>
        <Grid container>
          <Grid item xs={12}>
            <p className={classes.copyRightText}>
              &copy; {new Date().getFullYear()} Joshua Worley. All Rights Reserved.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default Footer;


