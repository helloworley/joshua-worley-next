import '../style/style.scss'
import { Typography } from '@material-ui/core'
import Layout from '../components/MyLayout';


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
  return (
    <div style={bgImageContainer}>
      <div style={bgImage}>
        <Layout>
          <Typography variant="h1" component="h2" >Joshua Worley</Typography>
          <h2>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>
        </Layout>
      </div>
    </div>
  )
}

export default Page;