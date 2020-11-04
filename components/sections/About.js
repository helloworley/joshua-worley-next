import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import RichTextToHTML from '../RichTextToHTML'
import ButtonWrapped from '../ButtonWrapped'
import SectionHeading from '../layout/SectionHeading'


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
  },
  buttonContainer: {
    marginTop: '50px',
  },
  resumeAbout: {
    marginLeft: '15px'
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
          <RichTextToHTML data={props.content} />
          <div className={classes.buttonContainer}>
            <ButtonWrapped 
              text="Resume"
              variant="outlined" 
              link={props.resumeLink}
              className={classes.projectTypeButtonWrapper}
            />
            <small className={classes.resumeAbout}>{props.resumeAbout}</small>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;


