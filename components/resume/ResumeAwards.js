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
        margin: '0 0 8px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            margin: '32px 0 64px',
        },
    },
    details: {
        margin: '0 0 64px',
    }
}));

const ResumeAwards = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.entry}>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/tag.png"/>
                    <p>
                        <strong>tag. (formerly Willeams Lea Tag)</strong>
                    </p>
                </div>

            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <p>Exceptional Operational Excellence <br/> Second half of the year 2018
                    </p>
                </div>

            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/rakuten.png"/>
                    <p>
                        <strong>Rakuten</strong>
                    </p>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <p>Passionately Professional Runner Up<br/> 2017 October
                    </p>

                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/bam.png"/>
                    <p>
                        <strong>Business Association of Multicultural Students</strong><br/>
                        University of Minnesota organization
                    </p>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <p>Member of the year 2014</p>
                    <ul>
                        <li>For volunteer leadership</li>
                        <li>Lead organization for a 2,000+ attendee charity event raising money towards
                            Kiva for impoverished children</li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/vtap-on-white.png"/>
                    <p>
                        <strong>Volunteer Tax Assistance Program</strong><br/>
                        University of Minnesota organization
                    </p>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={`${classes.entry} ${classes.details}`}>
                    <p>Member of the year 2014</p>
                    <ul>
                        <li>For rebranding the organization</li>
                        <li>+700 customers, a 63% increase</li>
                    </ul>
                </div>
            </Grid>

        </Grid>
    )
};

export default ResumeAwards;
