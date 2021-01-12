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
    color: 'black',
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      margin: '0 auto 40px',
    },
  }
}));

const getHeading = (classes, props) => {
  let color = props.color;
  color = color === undefined ? 'gray' : color;
  console.log('color', color)
  switch (color) {
    case 'white':
        return <h2 className={classes.heading} style={{color: 'white'}}>{props.text}</h2>;
    case 'gray':
        return <h2 className={classes.heading} style={{color: 'gray'}}>{props.text}</h2>;
    default:
        return <h2 className={classes.heading}>{props.text}</h2>
  }
}

const SectionHeading = props => {
  const classes = useStyles();
  return (
    <div className={`${classes.headingWrapper}`}>
        {getHeading(classes, props)}
    </div>
  )
};

export default SectionHeading;


