import Layout from '../../components/MyLayout'
import '../../style/style.scss'
import ImageCardSectionFocus from '../../components/ImageCardSectionFocus';
import ImageCardSectionEqual from '../../components/ImageCardSectionEqual';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

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
  const wpData = props.wpData;
  const brandProjects = props.brandProjects;
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.centeredWrapper}>
          {/* <h1 className={classes.image}>{wpData.title.rendered}</h1> */}
          {/* <div className="portfolio-type-description" dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} /> */}
        <h1 className={classes.image}>Development</h1>
        <ImageCardSectionFocus 
          projects={props.firstThreeProjects}
          urlBase="development"
        />
        <ImageCardSectionEqual
          projects={props.remainingProjects}
          urlBase="development"
        />
      </div>
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/15`);
  const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/websites`);
  const wpData = await wpRes.json();
  const headlessData = await headlessRes.json();

  const brandProjects = headlessData.map(entry => entry);
  const firstThreeProjects = brandProjects.slice(0, 3);
  const remainingProjects = brandProjects.slice(3, 9);

  return {
    wpData: wpData,
    firstThreeProjects: firstThreeProjects,
    remainingProjects: remainingProjects,
  };
};

export default Page;
