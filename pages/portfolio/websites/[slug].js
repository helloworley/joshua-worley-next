import Layout from '../../../components/MyLayout';
import '../../../style/style.scss';
import fetch from 'isomorphic-unfetch';

const websiteExample = props => {
  const websiteExample = props.websiteExample.website;
  return (
    <Layout>
      <h1>{websiteExample.post_title}</h1>
      <p>Date {websiteExample.post_date_formatted}</p>
      <div>
        <div dangerouslySetInnerHTML={{ __html: websiteExample.post_content }}></div>
      </div>
    </Layout>

  )
};

websiteExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/websites/${slug}`);
  const websiteExample = await res.json();

  return { websiteExample };
};

export default websiteExample;