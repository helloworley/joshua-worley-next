import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading';
import { Tech }  from '../Tech';

const useStyles = makeStyles(theme => ({
  description: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  },
  techExp: {
    padding: '60px 0',
    [theme.breakpoints.up('md')]: {
      padding: '100px 10px 0'
    }
  },
  displayTechs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr);',
    margin: '0 auto 80px',
    maxWidth: 1600,
    padding: '0 20px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(4, 1fr);',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(6, 1fr);',
      padding: '0 40px',
    },
  },
  techBlock: {
    textAlign: 'center',
    marginBottom: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '64px',
    }
  },
  techImg: {
    maxWidth: '50px',
    maxHeight: '50px',
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '80px',
      maxHeight: '80px',
    }
  },
  link: {
    '&:hover h4': {
      color: theme.colors.link,
    },
  }
}))

const displayTechs = techs => {
  const classes = useStyles();
  return (
    <div className={classes.displayTechs}>
      {
        techs.map( tech => {
          const text = tech.name['en-US'];
          const link = tech.link['en-US'];
          const image = tech.image['en-US'].fields.file['en-US'].url;
          return <Tech key={link} link={link} text={text} image={image} />;
        })
      }
    </div>
  )
}

const description = 'I have professional experience and working knowledge of the following design applications and frontend technologies. I am comfortable jumping into projects using these technologies and contributing from day one.';

const TechExp = props => {
  const classes = useStyles();
  return(
    <div className={classes.techExp}>
      <SectionHeading text="Professional Experience" description={description} />
      {displayTechs(props.technologies)}
    </div>
  )
}

export default TechExp