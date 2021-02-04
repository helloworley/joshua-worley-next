import { makeStyles } from '@material-ui/core/styles';

export const Tech = props => {
  const classes = useStyles();
  const { image, text, link } = props;
  
  return (
    <li className={classes.techListItem}>
      <a href={link} target="_blank">
        <div className={classes.techWrapper}>
          <img className={classes.techImage} src={image} />
          <h5>{text}</h5>
        </div>
      </a>
    </li>
  )
}

const useStyles = makeStyles(theme => ({
  techListItem: {
    listStyle: 'none',
    marginBottom: 15
  },
  techWrapper: {
    display: 'grid',
    gridTemplateColumns: '.25fr .75fr',
    alignItems: 'center',
    '& img': {
      maxWidth: 50,
      maxHeight: 50,
    },
    '& h5': {
      paddingLeft: 10
    }
  }
}));