import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../components/ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import '../style/style.scss'
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  centeredWrapper: {
    width: '100%',
    margin: '40px auto 80px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
}));

const Page = props => {
  const classes = useStyles();
  const wpData = props.wpData;
  return (
    <div>
      <Layout>
        <div className={classes.centeredWrapper}>
        <Grid spacing={4} container justify="center">
          <Grid item xs={12}>
            <h1>{wpData.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
            <ContactForm />
          </Grid>
        </Grid>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

Page.getInitialProps = async function () {
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/24`);
  const wpData = await wpRes.json();

  return { wpData };
};

export default Page;