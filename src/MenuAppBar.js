import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import history from './history';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
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
    menuEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ menuEl: event.currentTarget });
  };

  handleProfileMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuClose = () => {
    this.setState({ menuEl: null });
  };

  handleMenuClick = e => {
    e.preventDefault();
    const id = e.target.id;

    this.handleMenuClose();
    const links = {
      homeLink: '/',
      aboutLink: '/about',
      topicsLink: '/topics',
    };
    history.push(links[id]);
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, menuEl } = this.state;
    const open = Boolean(anchorEl);
    const menuOpen = !!menuEl;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-owns={menuOpen ? 'menuAppBar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menuAppBar"
              anchorEl={menuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={menuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem id="homeLink" onClick={this.handleMenuClick}>
                Home
              </MenuItem>
              <MenuItem id="aboutLink" onClick={this.handleMenuClick}>
                About
              </MenuItem>
              <MenuItem id="topicsLink" onClick={this.handleMenuClick}>
                Topics
              </MenuItem>
            </Menu>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Swapminder
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'profileAppbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="profileAppbar"
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
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleChange}>Logout</MenuItem>
                </Menu>
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
