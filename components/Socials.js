import { makeStyles } from '@material-ui/core/styles';
import navSocials from '../navSocials';

const socialItems = navSocials;

const useStyles = makeStyles({
  socialsList: {
    display: 'flex',
  },
  socialsListItem: {
    listStyle: 'none',
    margin: '0 12px 0 0'
  },
  socialLogo: {
    height: '12px',
    width: 'auto',
  },
  list: {
    margin: 0,
    padding: '64px 0 0',
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
                <img className={classes.socialLogo}  src={socialItem.logo}/>
              </a>
            </li>  
          ))}
        </ul>
    </div>
  )
};

export default Socials;