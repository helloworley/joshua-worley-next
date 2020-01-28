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
                        Main: Marketing Growth Manager<br/>
                        Sub: UI Designer, Videographer,
                        <br/>
                        Frontend Engineer<br/>
                        Shibuya, Tokyo<br/>
                        2019 April - Present
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <strong>Project Management</strong>
                    <ul>
                        <li>Lead the marketing growth department’s effort in Japan, focusing on project management for content creation and marketing. This includes managing creation, translation, and measurement for Japanese and English languages for articles, social media, webinars, ebooks, videos, etc.</li>
                        <li>Travel between Tokyo and Beijing to work with Chinese and Japanese teams to unify global retention strategies.</li>
                        <li>Co-develop retention KPIs and OKRs with the Beijing office quarterly.</li>
                    </ul>
                    <strong>Digital Marketing</strong>
                    <ul>
                        <li>Co-develop Japanese social media strategy and set up tracking dashboards to measure marketing efforts.</li>
                        <li>Set up social media accounts for Facebook, Twitter, LinkedIn, and YouTube in English and Japanese.</li>
                        <li>Lead a digital marketing team to manage social media and content marketing efforts.</li>
                        <li>Translate all copy on ptengine.com from Japanese to enter the global market.</li>
                    </ul>
                    <strong>Frontend Engineering</strong>
                    <ul>
                        <li>Coded 100% of the English and Japanese Ptengine (flagship product) web apps in Vue (Nuxt).
                            <ul>
                                <li>
                                    <a
                                        href="https://www.ptengine.jp"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label=" (opens in a new tab)">www.ptengine.jp</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.ptengine.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label=" (opens in a new tab)">www.ptengine.com</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <strong>Design / Photography / Videography / Branding</strong>
                    <ul>
                        <li>Created UI definitions for Ptengine, including column definitions, font styles, then set up a base framework in Vue to be easily translated to code.</li>
                        <li>Consolidated and created a brand/photography/design assets library for the company.</li>
                        <li>Designed company-branded business cards.</li>
                        <li>Took portrait photos for all members' business cards, Intercom profiles, SNS intros, etc.</li>
                        <li>Recorded, edited, and posted case studies for multiple success stories with clients in Japanese. Then measured their effect on sales.
                            <ul>
                                <li>DMM.com (coming soon)</li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=1MNbbAn3JIY" target="_blank">RIZAP</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=uZQVI9dk5n4" target="_blank">GROOVE X</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <div className={classes.place}>
                        <img className={classes.resumeBrand} src="/tag.png"/>
                        <strong>tag. (formerly Williams Lea Tag)</strong><br/>
                        Senior Web Designer, Digital Producer<br/>
                        Shinagawa / Otemachi, Tokyo<br/>
                        2018 January – 2019 April
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <strong>At Headquarters 2018 December - 2019 April</strong>
                    <ul>
                        <li>Created the UI and UX for Cunard (Queen Mary 2, etc) Luxury Cruise Line’s new
                            Japanese website.
                            <ul>
                            <li>
                                <a href="https://www.cunard.jp/" target="_blank">cunard.jp</a>
                            </li>
                            </ul>
                        </li>
                        <li>Worked one-on-one with Cunard Japan’s CEO to understand business goals and
                            design the site to achieve them.</li>
                        <li>Proposed market strategy and customer segmentation for domestic and
                            international markets.</li>
                        <li>Created luxury cruise experience videos for site content and social media
                            campaigns.</li>
                    </ul>
                    <strong>Onsite Morgan Stanley 2018 January - 2018 December</strong>
                    <ul>
                        <li>Worked as a member of Morgan Stanley’s Design Asia studio, designing, coding
                            and project managing for all of Asia.</li>
                        <li>Designed (80%), created (100%) and maintained (100%) Morgan Stanley’s
                            Australian and Chinese websites. Designed for and updated Morgan Stanley's
                            Japanese website (20%)
                            <ul>
                                <li>
                                    <a
                                        href="http://www.morganstanley.com.au"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label=" (opens in a new tab)">www.morganstanley.com.au</a>
                                </li>
                                <li>
                                    <a
                                        href="http://www.morganstanleychina.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label=" (opens in a new tab)">www.morganstanleychina.com</a>
                                </li>
                                <li>
                                    <a
                                        href="http://www.morganstanley.co.jp/en"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label=" (opens in a new tab)">www.morganstanley.co.jp/en</a>
                                </li>
                            </ul>
                        </li>
                        <li>Proposed and created the studio’s Sketch library for emailer components and
                            corresponding HTML/CSS component library, decreasing time spent on email
                            creation 75% on average.</li>
                        <li>Handled up to seven projects in a normal day while mentoring another web
                            designer in Japanese.</li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <div className={classes.place}>
                        <img className={classes.resumeBrand} src="/rakuten.png"/>
                        <strong>Rakuten Inc</strong><br/>
                        Center of Excellence dept&nbsp;<br/>
                        Frontend engineer, UX/UI Designer<br/>
                        Futakotamagawa, Tokyo<br/>
                        2016 April - 2018 January
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <ul>
                        <li>Self-started UX/UI improvement projects to benefit the organization, i.e.
                            internal chat app design and coding.</li>
                        <li>Started and finished version 1 of Rakuten’s new group-wide CSS framework and
                            JavaScript React component library to design specs, to eventually be implemented
                            throughout 90 businesses (think Google’s material design, but for Rakuten).</li>
                        <li>https://github.com/rakuten-frontend/rakuten-react-kit<br/>
                            Coded for multiple businesses in HTML, CSS, and JavaScript.</li>
                    </ul>
                </div>
            </Grid>

        </Grid>
    )
};

export default ResumeExperience;
