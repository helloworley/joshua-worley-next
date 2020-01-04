import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles({
  imageCard: {
    width: '100%',
    backgroundColor: 'red',
  },
});

const Page = props => {
  const wpData = props.wpData;
  const uiProjects = props.uiProjects;
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={0} className="project-snapshots">
        <Grid item xs={12}>
          <h1 className={classes.image}>{wpData.title.rendered}</h1>
          <div className="portfolio-type-description" dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
        </Grid>
      {uiProjects.map((uiProject) => {
        return (
          <Grid item xs={12} sm={6} lg={4} className="project-snapshot" key={uiProject.post_title}>
            <span key={uiProject.post_title}>
              <Link href="/portfolio/ui/[slug]" as={`/portfolio/ui/${uiProject.slug}`}>
                <a>
                  <ImageCard
                    className={classes.imageCard}
                    name={uiProject.post_title}
                    image={uiProject.featured_image}
                    date={uiProject.post_date_formatted}
                    excerpt={uiProject.post_excerpt}
                    id={uiProject.id}
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
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/15`);
  const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/ui`);
  const wpData = await wpRes.json();
  const headlessData = await headlessRes.json();

  return {
    wpData: wpData,
    uiProjects: headlessData.map(entry => entry)
  };
};

export default Page;
