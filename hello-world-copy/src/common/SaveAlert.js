import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import YesIcon from '@material-ui/icons/Check';
import NoIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
function Transition(props) {
  return <Slide direction="down" {...props} />;
}
const styles = theme => ({
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
class SaveAlert extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Are you sure you want to save information on the page ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" size="small" className={classes.button} onClick={this.props.updateConfirm}>
                <YesIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Yes
            </Button>
            <Button variant="contained" color="secondary" size="small" className={classes.button} onClick={this.props.onClose}>
                <NoIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
SaveAlert.propTypes = {
    updateConfirm:PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };
export default  withStyles(styles) (SaveAlert);
