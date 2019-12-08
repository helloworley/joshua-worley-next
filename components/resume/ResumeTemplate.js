import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
    resumeBrand: {
    maxWidth: '100%',
    width: '120px',
    display: 'block',
    margin: '0 0 24px'
    }
}));

const ResumeExperience = props => {
  const classes = useStyles();
  return (
    <Grid container>
        <Grid xs={12}>
        <h3 className={classes.resumeSectionHeading}>Experience</h3>
        </Grid>

        <Grid xs={12} md={3}>
            
        </Grid>
        <Grid xs={12} md={9}>
       
        </Grid>
        

        <Grid xs={12} md={3}>
       
        </Grid>

        <Grid xs={12} md={3}>
        
        </Grid>

    </Grid>
  )
};

export default ResumeExperience;


