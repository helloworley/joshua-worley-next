import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from '../RichTextToHTML';
import SectionHeading from '../layout/SectionHeading';
const bgImage = require('../../public/sanfran.jpg');

const useStyles = makeStyles(theme => ({
  thankYou: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '& p': {
      color: theme.colors.gray700,
    },
    '& h2': {
      color: theme.colors.gray700,
    },
  },
  thankYouInner: {
    backgroundColor: 'rgba(255,255,255,.85)',
    padding: theme.padding.xs,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: '90px 0 110px'
    },
  }
}));

const ThankYou = props => {
  const classes = useStyles();
  // console.log('thank you props', props)
  const thankYouText = props.content.text["en-US"].content

  return (
    <div className={classes.thankYou}>
      <div className={classes.thankYouInner}>
        <div className="section-wrapper">
          <SectionHeading text="Thank You" />
          <div className="thank-you-section">
            <RichTextToHTML data={thankYouText} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ThankYou;


