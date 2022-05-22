import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';

const NavBar = () => {


  return (
    <>
        <AppBar>
            <Toolbar>
                <SearchBar />
            </Toolbar>
        </AppBar>
    </>
  );
}

export default NavBar;