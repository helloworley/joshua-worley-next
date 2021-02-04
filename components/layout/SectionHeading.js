import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headingInner: {
    ...theme.content.inner.sm,
    [theme.breakpoints.up('md')]: { 
      ...theme.content.inner.md, 
      marginBottom: '60px',
    },
    [theme.breakpoints.up('lg')]: { 
      ...theme.content.inner.lg, 
    },
    [theme.breakpoints.up('xl')]: { 
      ...theme.content.inner.xl, 
    },
    '& p': {
      color: theme.colors.gray100,
      maxWidth: 900
    }
  },
  heading: {
    fontSize: '1.4rem',
    fontWeight: '400',
    margin: '0 auto 30px',
    color: 'black',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
      margin: '0 auto 40px',
    },
  }
}));

const colors = {
    gray100: '#F8F8F8',
    gray200: '#E5E5E5',
    gray300: '#D3D3D3',
    gray400: '#A5A5A5',
    gray500: '#646464',
    gray600: '#3B3D3C',
    gray700: '#2B2B28'
}

const getHeading = (classes, text, color) => {
  color = color === undefined ? 'gray' : color;
  switch (color) {
    case 'white':
        return <h2 className={classes.heading} style={{color: 'white'}}>{text}</h2>;
    case 'gray':
        return <h2 className={classes.heading} style={{color: colors.gray600}}>{text}</h2>;
    default:
        return <h2 className={classes.heading}>{text}</h2>
  }
}

const getDescription = (color, text) => {
  color = color === undefined ? 'gray' : color;
  switch (color) {
    case 'white':
        return <p style={{color: 'white'}}>{text}</p>;
    default:
        return <p style={{color: colors.gray600}}>{text}</p>;
  }
}

const SectionHeading = props => {
  const classes = useStyles();
  const { color, text, description } = props;
  return (
    <div className={`${classes.headingInner}`}>
      {getHeading(classes, text, color)}
      {props.description && getDescription(color, description)}
    </div>
  )
};

export default SectionHeading;


