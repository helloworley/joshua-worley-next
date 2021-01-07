import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headingWrapper: {
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '60px',
    },
    '&.no-border': {
      borderBottom: 'none'
    }
  },
  heading: {
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '7px',
    fontWeight: '400',
    textAlign: 'center',
    margin: '0 auto 30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      margin: '0 auto 40px',
    },
  }
}));

const SectionHeading = props => {
  const classes = useStyles();
  return (
    <div className={`${classes.headingWrapper}`}>
      <h2 className={classes.heading}>{props.text}</h2>
    </div>
  )
};

export default SectionHeading;


