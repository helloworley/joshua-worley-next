import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from '../RichTextToHTML'
import ButtonWrapped from '../ButtonWrapped'
import SectionHeading from '../layout/SectionHeading'
import ProjectPost from '../ProjectPost'


const useStyles = makeStyles(theme => ({
  RecentProjects: {
    padding: theme.padding.xs,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.padding.md
    },
  },
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  image: {
    width: '100%'
  }
}));

const RecentProjects = props => {
  const classes = useStyles();

  return (
    <div className={classes.RecentProjects}>
      <div>
        <SectionHeading text="Recent Project" noBorder={true} />
        {
          props.projects.map( service => {
            // console.log('service', service)
            const brand = service.brand["en-US"]
            const brandAbout = service.brandAbout["en-US"].content
            const date = service.date["en-US"]
            const finalThoughts = service.finalThoughts["en-US"].content
            const heroImage = service.heroImage["en-US"]
            const logo = service.logo["en-US"]
            const projectIntro = service.projectIntro["en-US"].content
            const projectTitle = service.projectTitle["en-US"]
            const projectType = service.projectType["en-US"]
            const sections = service.sections["en-US"]
            return <ProjectPost 
              key={brand}
              brand={brand}
              brandAbout={brandAbout}
              date={date}
              finalThoughts={finalThoughts}
              heroImage={heroImage}
              logo={logo}
              projectIntro={projectIntro}
              projectTitle={projectTitle}
              projectType={projectType}
              sections={sections}
            />
          })
        }
      </div>
    </div>
  )
};

export default RecentProjects;


