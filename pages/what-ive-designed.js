import '../style/style.scss'
import TabsNavigation from '../components/TabsNavigation';
import fetch from 'isomorphic-unfetch';
import { Grid } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  heading: {
    lineHeight: 1,
  },
  headingGrid: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  }
}));

const Page = props => {
  const websiteExamples = props.websiteExamples;
  const pageData = props.pageData;
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.headingGrid}>
        <TabsNavigation 
          links={websiteExamples} 
          title="What I've Designed"
        />
        </Grid>
      </Grid>
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const pageRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/12`);
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/websites`);
  const pageData = await pageRes.json();
  const wpData = await res.json();

  return {
    pageData: pageData,
    websiteExamples: wpData.map(entry => entry)
  };
};

export default Page;
