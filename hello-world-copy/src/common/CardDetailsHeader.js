import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Save from '@material-ui/icons/SaveRounded';
import Cancel from '@material-ui/icons/CancelOutlined';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  afterEle: {
    '&::after': {
      marginTop: '2px',
      borderTop: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '""'
    },
  },
  iconButton: {
    fontSize:'12px',
    //backgroundColor: 'green'
  }
});

function CardDetailsHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={9}>
                <Typography className={classes.afterEle} variant="body1" gutterBottom>
                        {props.title}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                {
                    props.parentMehod?
                <div>    
                <IconButton  className={classes.iconButton}onClick={props.parentMehod}>
                    <Save />
                    Save
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <Cancel />
                    Cancel
                </IconButton>
                </div>:<div></div>
                }
                
            </Grid>
        </Grid>
    </div>
  );
}

CardDetailsHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  parentMehod:PropTypes.func.isRequired
};

export default withStyles(styles)(CardDetailsHeader);