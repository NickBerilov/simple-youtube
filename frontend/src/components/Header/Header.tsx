import React from 'react';
import { Box, Button, Toolbar, AppBar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Button color="inherit" size="large" component={NavLink} to="/">
            Simple Youtube
          </Button>
        </Box>
      </Toolbar>
    </AppBar>

  );
};

export default Header;
