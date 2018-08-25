import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { browserHistory} from 'react-router'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  root: {
    flexGrow: 1,

  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {

    this.setState({ anchorEl: null });
  };
  handleAdd = () => {
    browserHistory.push(`/clients/new`);
    this.setState({ anchorEl: null });
  };
  handleClients =() => {
    browserHistory.push(`/clients`);
    this.setState({ anchorEl: null });
  };
  handleRequirements=() =>{
    browserHistory.push(`/requirements`);
    this.setState({ anchorEl: null });
  }
  handleCandidates=() =>{
    browserHistory.push(`/candidates`);
    this.setState({ anchorEl: null });
  }
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;

    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <AppBar position="static">

          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon  onClick={this.handleMenu} />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClients}>Clients</MenuItem>
                <MenuItem onClick={this.handleRequirements}>Requirements</MenuItem>
                  <MenuItem onClick={this.handleCandidates}>Candidates</MenuItem>
                <Hidden smDown>
                  <MenuItem onClick={this.handleAdd}>Add New Client</MenuItem>
                </Hidden>
              </Menu>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              RecuPro
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  //onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
                </IconButton>

              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
