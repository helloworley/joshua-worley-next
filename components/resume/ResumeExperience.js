import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    resumeBrand: {
        maxWidth: '100%',
        width: '120px',
        display: 'block',
        margin: '24px auto 24px',
        [theme.breakpoints.up('md')]: {
            margin: '0 0 24px',
        },
    },
    entry: {
        margin: '0 0 32px'
    },
    details: {
        margin: '0 0 64px',
    },
    place: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
}));

const ResumeExperience = props => {
    const classes = useStyles();
    return (
        <Grid container>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <div className={classes.place}>
                        <img className={classes.resumeBrand} src="/ptmind.png"/>
                        <strong>PTMIND, Inc.</strong><br/>
                        Designer, Frontend Engineer, Growth Manager
                        <br/><br/>
                        Shibuya, Tokyo<br/>
                        2019 April - Present
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <strong>Visual and UX Design</strong>
                    <ul>
                        <li>Create all design and marketing materials for the Japanese office, including illustrations, wireframes, user flows, personas, blog article images, web components, web portals, splash pages, flyers, invitations, and business cards.</li>
                        <li>Create a brand/photography/design library for the company.</li>
                        <li>Record and produce video case studies for multiple success stories with clients in Japanese.</li>
                    </ul>
                    <strong>Frontend Engineering</strong>
                    <ul>
                        <li>Coded the <a href="http://www.ptengine.jp" target="_blank">Ptengine (flagship product) web apps</a> in <a href="https://vuejs.org/" target="_blank">Vue.js</a> (<a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>) using a custom Wordpress Headless CMS (RestAPI).</li>
                        <li>Designed and created branded HTML email templates to unify the user experience in email marketing. HTML templates coded in <a href="https://mjml.io/" target="_blank">MJML</a> and implemented in <a href="https://www.intercom.com/" target="_blank">Intercom</a>.</li>
                    </ul>
                    <strong>Growth Management</strong>
                    <ul>
                        <li>Lead a team of 5 for Japanese content creation and measurement using Google Analytics, Ptengine, Facebook Insights, Intercom Metrics, etc.</li>
                        <li>Oversee Japanese email marketing, campaigns, and user segmentation.</li>
                        <li>Manage, measure, and iterate social media and content marketing efforts.</li>
                    </ul>
                    
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <div className={classes.place}>
                        <img className={classes.resumeBrand} src="/tag.png"/>
                        <strong>tag. (formerly Williams Lea Tag)</strong><br/>
                        Senior Web Designer, Digital Producer<br/>
                        Shinagawa/Otemachi, Tokyo<br/>
                        2018 January – 2019 April
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <strong>At Headquarters 2018 December - 2019 April</strong>
                    <ul>
                        <li>Created the UI and UX for Cunard (Queen Mary 2, etc) Luxury Cruise Line’s renewed <a href="https://www.cunard.jp/" target="_blank">Japanese website</a>.
                        </li>
                        <li>Worked one-on-one with Cunard Japan’s CEO and company stakeholders to understand business goals and design the site to achieve them.</li>
                        <li>Created luxury cruise experience videos for site content and social media
                            campaigns.</li>
                    </ul>
                    <strong>Onsite Morgan Stanley 2018 January - 2018 December</strong>
                    <ul>
                        <li>Worked as a member of Morgan Stanley’s Design Asia studio, designing, coding
                            and project managing for all of Asia.</li>
                        <li>Designed, created, and maintained Morgan Stanley’s <a href="www.morganstanley.com.au" target="_blank">Australian</a> and <a href="http://www.morganstanleychina.com" target="_blank">Chinese</a> websites. Designed for and maintained Morgan Stanley's <a href="http://www.morganstanley.co.jp/en" target="_blank">Japanese</a> website.
                        </li>
                        <li>Proposed and created the studio’s Sketch library for emailer components and
                            corresponding HTML/CSS component library, decreasing time spent on email
                            creation 75% on average.</li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <div className={classes.place}>
                        <img className={classes.resumeBrand} src="/rakuten.png"/>
                        <strong>Rakuten Inc</strong><br/>
                        Center of Excellence dept&nbsp;<br/>
                        Frontend engineer, UX UI Designer<br/>
                        Futakotamagawa, Tokyo<br/>
                        2016 April - 2018 January
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <ul>
                        <li>Self-started UX UI improvement projects to benefit the organization, i.e.
                            internal chat app design and coding.</li>
                        <li>Started and finished version 1 of Rakuten’s new group-wide <a href="https://github.com/rakuten-frontend/rakuten-react-kit" target="_blank">CSS framework</a> and
                            JavaScript React component library to design specs, to eventually be implemented
                            throughout 90 businesses (think Google’s material design, but for Rakuten).</li>
                        <li>Coded for multiple businesses in HTML, CSS, and JavaScript.</li>
                    </ul>
                </div>
            </Grid>

        </Grid>
    )
};

export default ResumeExperience;
