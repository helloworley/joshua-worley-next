import '../style/style.scss'
import { Typography } from '@material-ui/core'
import Layout from '../components/MyLayout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heading: {
    color: 'white',
    margin: '0 0 24px',
  },
  subheading: {
    color: 'white',
  }
}));


const bgImageContainer = {
  background: `url(/home-background.jpg)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
}
const bgImage = {
  backgroundColor: 'rgba(0,0,0,.3)',
  width: '100%',
  height: '100vh',
}

const Page = props => {
  const classes = useStyles();
  return (
    <div style={bgImageContainer}>
      <div style={bgImage}>
        <Layout menuColor="#fff" navBackgroundColor="#333">
          <Typography variant="h1" component="h2" className={classes.heading}>Joshua Worley</Typography>
          <h2 className={classes.subheading}>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>
        </Layout>
      </div>
    </div>
  )
}

export default Page;