import Layout from '../../../components/MyLayout';
import '../../../style/style.scss';
import fetch from 'isomorphic-unfetch';

const uiExample = props => {
  const uiExample = props.uiExample.ui;
  return (
    <Layout>
      <h1>{uiExample.post_title}</h1>
      <p>Date {uiExample.post_date_formatted}</p>
      <div className="wp-content">
        <div dangerouslySetInnerHTML={{ __html: uiExample.post_content }}></div>
      </div>
    </Layout>

  )
};

uiExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/ui/${slug}`);
  const uiExample = await res.json();

  return { uiExample };
};

export default uiExample;