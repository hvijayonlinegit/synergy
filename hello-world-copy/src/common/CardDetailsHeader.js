import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
// import Save from '@material-ui/icons/SaveRounded';
import Typography from '@material-ui/core/Typography';

import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
// import Button from '@material-ui/core/Button';
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
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function CardDetailsHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={10} md={10} sm={8}>
                <Typography className={classes.afterEle} variant="body1" gutterBottom>
                        {props.title}
                </Typography>
            </Grid>
            <Grid item xs={2} md={2} sm={4}>
                {
                    props.parentMehod?
                <div>    
                <IconButton  className={classes.iconButton}onClick={props.parentMehod}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                    SAVE
                </IconButton>
                {/* <Button variant="contained" size="small" className={classes.button} onClick={props.parentMehod}>
                  <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                  Save
                </Button> */}
                
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