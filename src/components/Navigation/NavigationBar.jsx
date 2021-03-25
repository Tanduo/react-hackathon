import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


// This is pretty much an out of the box navigation bar from @material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          {/* Menu icon button */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-controls="menu" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          {/* Menu with links to the different routes set up in app.js */}
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to='/' >
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to='/testpage2' >
              <MenuItem onClick={handleClose}>TestPage2</MenuItem>
            </Link>
          </Menu>
          {/* Typography is formatted text */}
          <Typography variant="h6" className={classes.title}>
            TestApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
