import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
  card: {
    border: '2px dotted lightgray',
    width: '100%',
    boxShadow: 'none',
    marginBottom: '10px'
  },
});

function Audit(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        Last Created By: {props.createdBy?props.createdBy:''}
                    </Grid>
                    <Grid item xs={6}>
                        Last Modified By:{props.updatedBy?props.updatedBy:''} on {props.updatedAt?props.updatedAt:''}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  );
}

Audit.propTypes = {
  classes: PropTypes.object.isRequired,
  createdBy: PropTypes.object.isRequired,
  updatedBy: PropTypes.object.isRequired,
  updatedAt: PropTypes.object.isRequired
};

export default withStyles(styles)(Audit);