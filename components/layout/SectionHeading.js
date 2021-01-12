import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headingWrapper: {
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '60px',
    },
    '&.no-border': {
      borderBottom: 'none'
    },
    '& p': {
      textAlign: 'center',
      color: theme.colors.gray100
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

const getHeading = (classes, text, color) => {
  color = color === undefined ? 'gray' : color;
  switch (color) {
    case 'white':
        return <h2 className={classes.heading} style={{color: 'white'}}>{text}</h2>;
    case 'gray':
        return <h2 className={classes.heading} style={{color: 'gray'}}>{text}</h2>;
    default:
        return <h2 className={classes.heading}>{text}</h2>
  }
}

const getDescription = (color, text) => {
  switch (color) {
    case 'white':
        return <p style={{color: 'white'}}>{text}</p>;
    default:
        return <p>{text}</p>;
  }
}

const SectionHeading = props => {
  const classes = useStyles();
  const { color, text, description } = props;
  return (
    <div className={`${classes.headingWrapper}`}>
        {getHeading(classes, text, color)}
        {props.description && getDescription(color, description)}
    </div>
  )
};

export default SectionHeading;


