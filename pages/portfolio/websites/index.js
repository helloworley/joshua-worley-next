import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Page = props => {
  const websiteExamples = props.websiteExamples;
  return (
    <Layout>
      <h1>Websites</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
      {websiteExamples.map((websiteExample) => {
        return (
          <span key={websiteExample.post_title}>
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
        );
      })}
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
