import { makeStyles } from '@material-ui/core/styles';
import navSocials from '../navSocials';

const socialItems = navSocials;

const useStyles = makeStyles({
  socialsList: {
    display: 'flex',
    paddingLeft: '0',
  },
  socialsListItem: {
    listStyle: 'none',
    margin: '0 12px 0 0'
  },
  socialLogo: {
    height: '12px',
    width: 'auto',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
  },
});

const Socials = props => {
  const classes = useStyles();
  return (
    <div className={classes.socialLogos}>
        <ul className={classes.socialsList}>
          {socialItems.map(socialItem => (
            <li className={classes.socialsListItem} key={socialItem.logo}>
              <a href={socialItem.link} target="_blank">
                {
                  props.color == 'white' ? 
                    <img src={socialItem.logoLight} className={classes.socialLogo} /> :
                    <img src={socialItem.logoDark} className={classes.socialLogo} /> 
                }
                
              </a>
            </li>  
          ))}
        </ul>
    </div>
  )
};

export default Socials;