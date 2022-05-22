import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import ClearIcon from '@mui/icons-material/Clear';
import { InputBase, Paper, IconButton } from '@mui/material';

const SearchBar = ({ disabled, getQuestion }) => {


    return (
        <>
            <Paper>
                <IconButton
                 {...disabled ? 'disabled' : ''}
                >
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder='Ask BERT a question...'
                    onKeyDown={getQuestion}
                    { ...disabled ? 'disabled' : '' }
                />
                <IconButton
                    { ...disabled ? 'disabled' : '' }
                >
                    <ClearIcon />
                </IconButton>
            </Paper>
        </>
    );
}

export default SearchBar;