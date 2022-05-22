import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ClearIcon from '@mui/icons-material/Clear';
import { InputBase, Paper, IconButton } from '@mui/material';

const SearchBar = () => {


  return (
    <>
        <Paper>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <InputBase />
            <IconButton>
                <MicIcon />
            </IconButton>
        </Paper>
    </>
  );
}

export default SearchBar;