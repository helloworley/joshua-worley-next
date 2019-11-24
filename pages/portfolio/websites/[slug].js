import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'

const websiteExample = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    {/* <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} /> */}
  </Layout>
);

websiteExample.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/websites/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default websiteExample;