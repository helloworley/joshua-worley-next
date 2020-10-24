import { makeStyles } from '@material-ui/core/styles';
import LogoVertical from '../assets/LogoVertical'
import Socials from '../assets/Socials'


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
          <LogoVertical />
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


