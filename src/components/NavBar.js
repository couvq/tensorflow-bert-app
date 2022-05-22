import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({ disabled, answerQuestion }) => {


  return (
    <>
        <AppBar sx={{
            backgroundColor: "#42a5f5"
        }}>
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <MenuIcon />
                <SearchBar disabled={disabled} answerQuestion={answerQuestion}/>
                <AccountCircleIcon />
            </Toolbar>
        </AppBar>
    </>
  );
}

export default NavBar;