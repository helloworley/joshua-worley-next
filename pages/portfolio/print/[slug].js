import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'

const printExample = props => {
  const printExample = props.printResponse.print;
  return (
    <Layout>
      <h1>{printExample.post_title}</h1>
      <p>Date {printExample.post_date_formatted}</p>
      <div className="wp-content">
        <div dangerouslySetInnerHTML={{ __html: printExample.post_content }}></div>
      </div>
    </Layout>

  )
};

printExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/print/${slug}`);
  const printResponse = await res.json();

  return { printResponse };
};

export default printExample;