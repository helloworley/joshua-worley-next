import Layout from '../../components/MyLayout'
import '../../style/style.scss'
import ImageCardSectionFocus from '../../components/ImageCardSectionFocus';
import ImageCardSectionEqual from '../../components/ImageCardSectionEqual';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Footer from '../../components/Footer';

const useStyles = makeStyles(theme => ({
  imageCard: {
    width: '100%',
    backgroundColor: 'red',
  },
  centeredWrapper: {
    width: '100%',
    margin: '80px auto 80px',
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
  return (
    <div>
      <Layout>
        <div className={classes.centeredWrapper}>
        <h1 className={classes.image}>Branding</h1>
          <ImageCardSectionFocus 
            projects={props.firstThreeProjects}
            urlBase="branding"
          />
          <ImageCardSectionEqual
            projects={props.remainingProjects}
            urlBase="branding"
          />
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

Page.getInitialProps = async function (context) {
  const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/brand`);
  const headlessData = await headlessRes.json();

  const brandProjects = headlessData.map(entry => entry);
  const firstThreeProjects = brandProjects.slice(0, 3);
  const remainingProjects = brandProjects.slice(3, 9);

  return {
    firstThreeProjects: firstThreeProjects,
    remainingProjects: remainingProjects,
  };
};

export default Page;
