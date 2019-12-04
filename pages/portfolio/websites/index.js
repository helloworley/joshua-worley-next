import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Grid } from '@material-ui/core/';
import Layout from '../../../components/MyLayout';
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
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={8}>
        <Grid item xs={12} className={classes.headingGrid}>
          <h1 className={classes.heading}>Websites</h1>
        </Grid>
        {websiteExamples.map((websiteExample) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={websiteExample.post_title}>
              <span>
                <Link href="/portfolio/websites/[slug]" as={`/portfolio/websites/${websiteExample.slug}`}>
                  <a>
                    <ImageCard
                      name={websiteExample.post_title}
                      image={websiteExample.featured_image}
                      date={websiteExample.post_date_formatted}
                      excerpt={websiteExample.post_excerpt}
                      id={websiteExample.id}
                    />
                  </a>
                </Link>
              </span>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/websites`);
  const wpData = await res.json();

  console.log(wpData);

  return {
    websiteExamples: wpData.map(entry => entry)
  };
};

export default Page;
