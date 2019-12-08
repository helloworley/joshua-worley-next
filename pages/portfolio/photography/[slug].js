import Layout from '../../../components/MyLayout';
import '../../../style/style.scss';
import fetch from 'isomorphic-unfetch';

const photographyProject = props => {
  const photographyProject = props.photographyProject.photography;
  return (
    <Layout>
      <h1>{photographyProject.post_title}</h1>
      <p>Date {photographyProject.post_date_formatted}</p>
      <div className="wp-content">
        <div dangerouslySetInnerHTML={{ __html: photographyProject.post_content }}></div>
      </div>
    </Layout>

  )
};

photographyProject.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/photography/${slug}`);
  const photographyProject = await res.json();

  return { photographyProject };
};

export default photographyProject;