import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import RichTextToHTML from '../RichTextToHTML'
import ButtonWrapped from '../ButtonWrapped'

const useStyles = makeStyles(theme => ({
  featuredProject: {
    padding: '80px 20px 120px',
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
    },
  },
  iMacPreview: {
    textAlign: 'center',
    position: 'relative'
  },
  iMac: {
    maxWidth: '100%',
    marginBottom: '30px'
  },
  screen: {
    position: 'absolute',
    width: '92%',
    height: '200px',
    left: '0',
    right: '0',
    top: '6.5%',
    height: '61%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '962px',
    backgroundSize: 'cover',
  },
  aboutProject: {
    maxWidth: '1040px',
    margin: '0 auto'
  },
  buttonContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '40px'
  },
  logo: {
    maxWidth: '180px',
    maxHeight: '80px',
    marginBottom: '10px'
  },
  projectTitle: {
    marginTop: '50px',
    marginBottom: '20px',
    fontWeight: 'normal'
  }
}))

const FeaturedProject = props => {
  const classes = useStyles();
  const project = props.project[0].fields.project['en-US'].fields
  console.log('featured project', project)
  const title = project.projectTitle['en-US']
  const logo = project.logo['en-US'].fields.file['en-US'].url
  const hero = project.heroImage['en-US'].fields.file['en-US'].url
  const brandAbout = project.brandAbout['en-US'].content
  const projectIntro = project.projectIntro['en-US'].content
  const slug = project.slug['en-US']

  return(
    <section className={classes.featuredProject}>
      <SectionHeading text='Highlighted Project'/>
      <div className={classes.iMacPreview}>
        <div className={classes.screen} style={{backgroundImage: `url(${hero})`}}/>
        <img className={classes.iMac} src="/apple-imac-retina.png" />
      </div>
      <div className={classes.aboutProject}>
        <img src={logo} className={classes.logo} />
        <RichTextToHTML data={brandAbout} />
        <h2 className={classes.projectTitle}>{title}</h2>
        <RichTextToHTML data={projectIntro} />
        <div className={classes.buttonContainer}>
          <ButtonWrapped link={`/projects/${slug}`} text="More Info" variant="outline" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject