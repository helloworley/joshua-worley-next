import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
    root: {
      margin: '40px 0 0',
    },
    inputWrapper: {
      maxWidth: '400px',
      margin: '0 0 40px',
    },
    buttonWrapper: {
      margin: '64px 0 0'
    },
    normalizeGridItem: {
      padding: '0 !important',
    },
    input: {
      margin: '0',
    }
  }));

const ContactForm = props => {
  const classes = useStyles();
  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      action="/" 
      method="POST" 
      onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }
    >

      <Grid container spacing={4} className={classes.root}>

        <Grid item xs={12} className={classes.normalizeGridItem}>
          <div className={classes.inputWrapper}>
            <TextField 
              id="name"
              className={classes.input}
              label="Name"
              placeholder="Tyler Durden"
              helperText="Please enter your name."
              fullWidth
            />
          </div>

          <Grid item xs={12} className={classes.normalizeGridItem}>
            <div className={classes.inputWrapper}>
            <TextField 
              id="standard-full-width"
              label="Email"
              className={classes.input}
              placeholder="tyler@fightclub.com"
              helperText="Please enter your email address."
              fullWidth
            />
            </div>
          </Grid>

          <Grid item xs={12} className={classes.normalizeGridItem}>
            <div className={classes.inputWrapper}>
              <TextField
                id="message"
                label="Message"
                multiline
                rowsMax="4"
                helperText="What would you like to talk about? :)"
                fullWidth
              />
            </div>
          </Grid>

          <Grid item xs={12} className={classes.normalizeGridItem}>
            <div className={classes.buttonWrapper}>
              <Button 
                variant="contained"
                type="submit"
                label="Submit"
              >Submit</Button>
            </div>
          </Grid>

          https://usebasin.com/f/157e96a3e6e6

        </Grid>

      </Grid>

    </form>
  )
};

export default ContactForm;


