import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'

const useStyles = makeStyles(theme => ({
  description: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  },
  techExp: {
    padding: '100px 10px 0'
  },
  displayTechs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    marginTop: '80px',
    maxWidth: '1440px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
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
  techName: {
    fontSize: '10px',
    fontFamily: 'Lora',
    maxWidth: '90%',
    margin: '10px auto',
    [theme.breakpoints.up('sm')]: {
      fontFamily: '12px'
    },
  }
}))

const displayTechs = techs => {
  const classes = useStyles();
  return (
    <div className={classes.displayTechs}>
      {
        techs.map( tech => {
          const title = tech.name['en-US'];
          const link = tech.link['en-US'];
          const imageUrl = tech.image['en-US'].fields.file['en-US'].url;
          return (
            <div key={title} className={classes.techBlock}>
              <a href={link} target="_blank">
                <img src={imageUrl} alt={`${title} Icon`} className={classes.techImg} />
                <h4 className={classes.techName}>{title}</h4>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

const TechExp = props => {
  const classes = useStyles();
  return(
    <div className={classes.techExp}>
      <SectionHeading text="Professional Experience" noBorder={true} />
      <div className={classes.description}>
        <p>Joshua has professional experience and working knowledge of the following design applications and frontend technologies.
          He is comfortable jumping into projects using these technologies and contributing from day one.
        </p>
      </div>
      {displayTechs(props.technologies)}
    </div>
  )
}

export default TechExp