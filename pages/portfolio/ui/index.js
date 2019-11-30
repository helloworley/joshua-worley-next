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
  const uiProjects = props.uiProjects;
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={8}>
      <Grid item xs={12}>
        <h1 className={classes.image}>UI Projects</h1>
      </Grid>
      {uiProjects.map((uiProject) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={uiProject.post_title}>
            <span key={uiProject.post_title}>
              <Link href="/portfolio/websites/[slug]" as={`/p/${uiProject.slug}`}>
                <ImageCard
                  className={classes.imageCard}
                  name={uiProject.post_title}
                  image={uiProject.featured_image}
                  date={uiProject.post_date_formatted}
                  excerpt={uiProject.post_excerpt}
                  id={uiProject.id}
                />
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
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/ui`);
  const wpData = await res.json();

  console.log(wpData);

  return {
    uiProjects: wpData.map(entry => entry)
  };
};

export default Page;
