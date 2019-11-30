import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Grid } from '@material-ui/core/';
import Layout from '../../../components/MyLayout';

const Page = props => {
  const websiteExamples = props.websiteExamples;
  return (
    <Layout>
      <h1>Websites</h1>
      <Grid container spacing={4}>
        {websiteExamples.map((websiteExample) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={websiteExample.post_title}>
              <span>
                <Link href="/portfolio/websites/[slug]" as={`/p/${websiteExample.slug}`}>
                  <ImageCard
                    name={websiteExample.post_title}
                    image={websiteExample.featured_image}
                    date={websiteExample.post_date_formatted}
                    excerpt={websiteExample.post_excerpt}
                    id={websiteExample.id}
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
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/websites`);
  const wpData = await res.json();

  console.log(wpData);

  return {
    websiteExamples: wpData.map(entry => entry)
  };
};

export default Page;
