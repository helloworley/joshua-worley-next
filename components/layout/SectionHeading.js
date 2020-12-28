import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headingWrapper: {
    borderBottom: `solid 1px ${theme.colors.line}`,
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
    fontFamily: 'Lora',
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
    props.noBorder === true ? 
      <div className={`${classes.headingWrapper} no-border`}>
        <h2 className={classes.heading}>{props.text}</h2>
      </div>
    :
    <div className={`${classes.headingWrapper} border`}>
      <h2 className={classes.heading}>{props.text}</h2>
    </div>
  )
};

export default SectionHeading;


