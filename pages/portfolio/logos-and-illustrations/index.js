import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import FullCard from '../../../components/FullCard';
import {Grid} from '@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles({
    image: {
        width: '100%'
    }
});

const Page = props => {
    const wpData = props.wpData;
    const illustrationProjects = props.illustrationProjects;
    const classes = useStyles();
    return (
        <Layout>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <h1 className={classes.image}>{wpData.title.rendered}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: wpData.content.rendered
                    }}/>
                </Grid>

                {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
                {illustrationProjects.map((illustrationProject) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={illustrationProject.post_title}>

                            <FullCard
                                name={illustrationProject.post_title}
                                excerpt={illustrationProject.post_excerpt}
                                image={illustrationProject.featured_image}
                                date={illustrationProject.post_date_formatted}
                                id={illustrationProject.id}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Layout>
    );
}

Page.getInitialProps = async function (context) {
    const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/239`);
    const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/illustrations`);
    const wpData = await wpRes.json();
    const headlessData = await headlessRes.json();

    return {
        wpData: wpData,
        illustrationProjects: headlessData.map(entry => entry)
    };
};

export default Page;
