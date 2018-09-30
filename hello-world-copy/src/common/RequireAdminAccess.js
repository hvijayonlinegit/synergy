import React from 'react';
import MySnackbarContentWrapper from './MySnackContent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit*6,
    padding: theme.spacing.unit * 6,
  },
  grid: {

    margin: theme.spacing.unit*6,
    padding: theme.spacing.unit * 6,
  }
});

function Errordiv(props){
  const { classes } = props;
return (
  <Paper className={classes.paper}>
  <Grid container wrap="nowrap" spacing={16}>
    
    <Grid item xs className={classes.grid} >
    <MySnackbarContentWrapper  
  variant="info"
 // className={classes.margin}
  message="Sorry user you need Admin access to see the content . 
  
  Please login as admin . or 
  If you are new to recupro and  need access please email to >>>  hvijayonline@gmail.com 

  Thank you ."
/>
    </Grid>
  </Grid>


</Paper>
);

}

Errordiv.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Errordiv);