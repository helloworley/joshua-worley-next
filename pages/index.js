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
    <div style={bgImageContainer} id="home">
      <div style={bgImage}>
        <Layout menuColor="#fff" navBackgroundColor="#333">
          <h1>{props.wpData.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />
        </Layout>
      </div>
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  console.log(wpData);

  return { wpData };
};

export default Page;