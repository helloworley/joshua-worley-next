import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ImageCard from '../ImageCard'
import { Grid } from '@material-ui/core/'
import { Repeat } from '@material-ui/icons';

const Projects = props => {
  const classes = useStyles();

  return (
    <div className={classes.projectsWrapper} style={{backgroundImage: `url('./nightsky.jpg')`}}>
      <div className={classes.projects} >
        <div className={classes.projectsInner}>
          <SectionHeading text={props.title} color="white" noBorder={true} description="Please see below for examples of websites/apps that I have designed/developed. For each project, the technologies that I personally used to complete the project are displayed." />
            <div className={classes.grid}>
            {
              props.projects.map( service => {
                const brand = service.brand["en-US"]
                const slug = service.slug["en-US"]
                const date = service.date["en-US"]
                const heroImage = service.heroImage["en-US"]
                const logo = service.logo["en-US"]
                const projectTitle = service.projectTitle["en-US"]
                const tech = service.technologies["en-US"]
                return <ImageCard 
                    urlBase="/projects"
                    slug={slug}
                    date={date}
                    image={heroImage}
                    logo={logo}
                    projectTitle={projectTitle}
                    tech={tech}
                  />   
              })
            }

            </div>
            
          
        </div>
      </div>

    </div>
  )
};

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridColumnGap: '40px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  projectsWrapper: {
    ...theme.backgroundImage,
  },
  projects: {
    padding: theme.padding.xs,
    background: 'linear-gradient(180deg,rgba(0,0,0,.4) 0%, rgba(0, 0, 0, 0) 100%)',
    [theme.breakpoints.up('sm')]: {
      padding: '120px 40px'
    },
    // [theme.breakpoints.up('md')]: {
    //   padding: '120px 0px'
    // },
    [theme.breakpoints.up('lg')]: {
      padding: '120px 30px'
    },
  },
  projectsInner: {
    maxWidth: '1560px',
    margin: '0 auto',
    
  },
  infoWrapper: {
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  image: {
    width: '100%'
  },
}));

export default Projects;


