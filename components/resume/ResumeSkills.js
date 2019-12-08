import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    resumeBrand: {
        maxWidth: '100%',
        width: '120px',
        display: 'block',
        margin: '0 0 24px'
    },
    skillSetTitle: {

    },
    skillSet: {
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            margin: '0 0 48px'
        }
    }
}));

const ResumeSkills = props => {
    const classes = useStyles();
    return (
        <Grid container>

            <Grid item xs={12} md={4}>
                <Grid item xs={12}>
                    <div className={classes.skillSetTitle}>
                        <h4>Language Skill</h4>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.skillSet}>
                        <ul>
                            <li>Native English</li>
                            <li>Business Japanese Competency
                                <ul>
                                    <li>JLPT N2 passed</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.skillSetTitle}>
                        <h4>Professional Design Experience</h4>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.skillSet}>
                        <ul>
                            <li>Sketch</li>
                            <li>Adobe XD</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Premiere</li>
                            <li>InDesign</li>
                            <li>InVision</li>
                            <li>Figma</li>
                            <li>Prott</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                <Grid item xs={12}>
                    <div className={classes.skillSetTitle}>
                        <h4>Professional Frontend Development experience</h4>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.skillSet}>
                        <ul>
                            <li>HTML5</li>
                            <li>
                                Styling
                                <ul>
                                    <li>CSS3</li>
                                    <li>Sass</li>
                                    <li>Less</li>
                                    <li>JSS</li>
                                    <li>Bootstrap framework</li>
                                </ul>
                            </li>
                            <li>
                                JavaScript
                                <ul>
                                    <li>React
                                        <ul>
                                            <li>Next</li>
                                            <li>Material UI</li>
                                            <li>Gatsby</li>
                                        </ul>
                                    </li>

                                    <li>Vue
                                        <ul>
                                            <li>Nuxt</li>
                                            <li>Vuetify</li>
                                            <li>Vuex</li>
                                        </ul>
                                    </li>
                                    <li>Coffeescript</li>
                                </ul>
                            </li>
                            <li>
                                PHP
                                <ul>
                                    <li>Wordpress Templates</li>
                                </ul>
                            </li>
                            <li>
                                Automation Tools
                                <ul>
                                    <li>Webpack</li>
                                    <li>Gulp</li>
                                    <li>Grunt</li>
                                </ul>
                            </li>
                            <li>Git, Gitflow</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>

        </Grid>
    )
};

export default ResumeSkills;