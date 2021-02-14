import { useState, KeyboardEvent, SyntheticEvent } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, List, ListItem, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../Logo';
import Login from '../Login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'primary',
    justifyContent: 'center',
    height: '7em',
    [theme.breakpoints.down(1065)]: {
      height: '5.6em',
    },
  },
  toolbar: theme.mixins.toolbar,
  Logo: {
    margin: '0 0.5rem 0 0.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  searchIcon: {
    fontSize: '2.5rem',
    color: theme.palette.background.default,
  },
  menuIcon: {
    fontSize: '2.5rem',
  },
  links: {
    color: theme.palette.background.default,
    fontFamily: 'Roboto, sans-serif',
    textDecoration: 'none',
    fontSize: '1.5rem',
    margin: '0 0.5rem 0 0.5rem',
  },
  button: {
    float: 'right',
    margin: '0 0.5rem 0 0.5rem',
  },
  list: {
    width: 250,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
  line: {
    backgroundColor: theme.palette.background.default,
  },
  item: {
    color: theme.palette.background.default,
    fontFamily: 'Roboto, sans-serif',
    textDecoration: 'none',
    fontSize: '1.5rem',
    justifyContent: 'center',
    fontWeight: 500,
    lineHeight: 1.75,
  },
}));

export default function MobileHeader() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (side: string, open: boolean) => (event: SyntheticEvent) => {
    if (event.type === 'keydown') {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift') {
        return;
      }
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side: string) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className={classes.item}>
        <ListItem button className={classes.item}>
          <Link href="/">
            <a className={classes.links}>Home</a>
          </Link>
        </ListItem>
        <Divider className={classes.line} />
        <ListItem button className={classes.item}>
          <Link href="/about">
            <a className={classes.links}>About</a>
          </Link>
        </ListItem>
        <Divider className={classes.line} />
        <Login isMobile />
        <Divider className={classes.line} />
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <Link href="/" passHref>
            <a>
              <Logo height={45} width={45} />
            </a>
          </Link>
          <div className={classes.grow} />
          <IconButton color="inherit" className={classes.button} aria-label="search">
            <Link href="/search">
              <SearchIcon className={classes.searchIcon} />
            </Link>
          </IconButton>
          <IconButton
            onClick={toggleDrawer('right', true)}
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.button}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Drawer
            classes={{ paper: classes.paper }}
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            {sideList('right')}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
