import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import ContentfulToHTML from '../helpers/ContentfulToHTML'
import ButtonWrapped from '../components/ButtonWrapped'
import SectionHeading from '../components/layout/SectionHeading'


const useStyles = makeStyles(theme => ({
  about: {
    minHeight: '400px',
    padding: theme.padding.xs,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.padding.md
    },
  },
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  image: {
    width: '100%'
  }
}));

const About = props => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <div className="section-wrapper">
        <SectionHeading text="About" />
        <img src={props.imgSrc} className={classes.image} />
        <div className={classes.infoWrapper}>
          <ContentfulToHTML data={props.content} />
          <ButtonWrapped 
            text="Resume"
            variant="outlined" 
            link={props.resumeLink}
            className={classes.projectTypeButtonWrapper}
          />
          <small>{props.resumeAbout}</small>
        </div>
      </div>
    </div>
  )
};

export default About;


