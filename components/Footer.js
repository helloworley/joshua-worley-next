import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Link from 'next/link';
import Socials from './Socials'


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundPosition: 'center',
    backgroundColor: theme.colors.brandDark,
    padding: '60px 20px',
    color: theme.colors.white,
  },
  centeredWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  socialsWrapper: {
    marginBottom: '8px'
  },
  copyRightText: {
    color: theme.colors.meta,
    textAlign: 'center',
    margin: '0 auto'
  },
  logo: {
    height: '50px',
  },
  footerText: {
    color: theme.colors.white,
    textAlign: 'center',
    maxWidth: 'initial',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '12px',
    marginBottom: '32px'
  },
  contact: {
    borderTop: `solid 1px ${theme.colors.white}`,
    maxWidth: '572px',
    margin: '0 auto',
    paddingTop: '32px', 
  },
  link: {
    color: theme.colors.white,
    marginBottom: '12px',
    display: 'inline-block'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className="section-wrapper">
        <div className={classes.centeredWrapper}>
          <img className={classes.logo} src="/ikigai-light.svg" />
          <h4 className={classes.footerText}>Joshua Worley</h4>
          <div className={classes.contact}>
            <div className={classes.socialsWrapper}>
              <Socials color="white"/>
            </div>
            <a className={classes.link} href={props.resumeLink} target="_blank">
              Resume
            </a>
          </div>
          <p className={classes.copyRightText}>
            &copy; {new Date().getFullYear()} Joshua Worley. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </div>
  )
};

export default Footer;


