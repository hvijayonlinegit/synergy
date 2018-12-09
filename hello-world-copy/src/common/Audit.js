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
  let updatedat= new Date(props.updatedAt?props.updatedAt:'').toLocaleString();
  let createdAt= new Date(props.createdAt?props.createdAt:'').toLocaleString();
  return (
    <div className={classes.root}>
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container spacing={32}>
                    <Grid item xs={6}>
                        Created By: <b>{props.createdBy?props.createdBy:''} </b> on {createdAt}
                    </Grid>
                    <Grid item xs={6}>
                      Modified By:<b>{props.updatedBy?props.updatedBy:''}</b> on {updatedat}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  );
}

Audit.propTypes = {
  classes: PropTypes.object.isRequired,
  createdBy: PropTypes.any,
  updatedBy: PropTypes.any,
  updatedAt: PropTypes.any
};

export default withStyles(styles)(Audit);