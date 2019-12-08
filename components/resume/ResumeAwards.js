import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    resumeBrand: {
        maxWidth: '100%',
        width: '120px',
        display: 'block',
        margin: '0'
    },
    entry: {
        margin: '0 0 64px'
    }
}));

const ResumeAwards = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.entry}>

            <Grid xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/tag.png"/>
                    <p>
                        <strong>tag. <br/> (formerly Willeams Lea Tag)</strong>
                    </p>
                </div>

            </Grid>
            <Grid xs={12} md={9}>
                <div className={classes.entry}>
                    <p>Exceptional Operational Excellence - Second half of the year 2018
                    </p>
                </div>

            </Grid>

            <Grid xs={12} md={3}>
                <div className={classes.entry}>

                    <img className={classes.resumeBrand} src="/rakuten.png"/>
                    <p>
                        <strong>Rakuten</strong>
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={9}>
                <div className={classes.entry}>
                    <p>Passionately Professional Runner Up - 2017 October
                    </p>

                </div>
            </Grid>

            <Grid xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/bam.png"/>
                    <p>
                        <strong>Business Association of Multicultural Students</strong><br/>
                        University of Minnesota organization
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={9}>
                <div className={classes.entry}>
                    <p>Member of the year 2014</p>
                    <ul>
                        <li>For volunteer leadership</li>
                        <li>Lead organization for a 2,000+ attendee charity event raising money towards
                            Kiva for impoverished children</li>
                    </ul>
                </div>
            </Grid>

            <Grid xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/vtap-on-white.svg"/>
                    <p>
                        <strong>Volunteer Tax Assistance Program</strong><br/>
                        University of Minnesota organization
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={9}>
                <div className={classes.entry}>
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
