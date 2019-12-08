import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    resumeBrand: {
        maxWidth: '100%',
        width: '120px',
        display: 'block',
        margin: '0 0 24px'
    },
    entry: {
        margin: '0 0 64px'
    }
}));

const ResumeEducation = props => {
    const classes = useStyles();
    return (
        <Grid container>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/carlson.jpg"/>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={classes.entry}>
                    <strong>Carlson School of Management, University of Minnesota</strong><br/>
                    BS Marketing, East Asian Studies Minor<br/>
                    Minneapolis, Minnesota USA<br/>
                    2010 August - 2015 May
                </div>
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/sophia.png"/>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <strong>Sophia University 上智大学</strong><br/>
                One year bi-lateral exchange program<br/>
                Yotsuya, Tokyo Japan<br/>
                2014 September - 2015 August
            </Grid>

            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/codecademy.png"/>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={classes.entry}>
                    <strong>Codecademy.com</strong><br/>
                    Class: Build Frontend Web Applications from Scratch<br/>
                    2018 September - 2018 November<br/>
                    <ul>
                        <li>3 month intensive program focusing on building web application using
                            JavaScript fundamentals, asynchronous requests, and React.js</li>
                    </ul>
                </div>
            </Grid>
            <Grid item xs={12} md={3}>
                <div className={classes.entry}>
                    <img className={classes.resumeBrand} src="/coursera.png"/>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className={classes.entry}>
                    <strong>Coursera.org</strong>
                    < br/>
                    <strong>California Institute of Arts (CalArts)</strong>
                    < br/>
                    <ul>
                        <li>Fundamentals of Graphic Design (2018 February)</li>
                        <li>Introduction to Typography (2018 March)</li>
                    </ul>
                </div>
            </Grid >
        </Grid>
    )
};

export default ResumeEducation;
