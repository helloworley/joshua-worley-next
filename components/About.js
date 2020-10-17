import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import ContentfulToHTML from '../helpers/ContentfulToHTML'
import ButtonWrapped from '../components/ButtonWrapped'


const useStyles = makeStyles(theme => ({
  about: {
    minHeight: '400px',
    backgroundColor: 'pink',
  }
}));

const About = props => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <img src={props.imgSrc} />
      <ContentfulToHTML data={props.content} />
      <ButtonWrapped 
        text="Resume"
        variant="outlined" 
        link={props.resumeLink}
        className={classes.projectTypeButtonWrapper}
      />
      <small>{props.resumeAbout}</small>
    </div>
  )
};

export default About;


