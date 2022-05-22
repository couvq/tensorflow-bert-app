import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import ClearIcon from '@mui/icons-material/Clear';
import { InputBase, Paper, IconButton } from '@mui/material';

const SearchBar = ({ disabled, answerQuestion }) => {

    const [input, setInput] = useState('');


    return (
        <>
            <Paper>
                <IconButton
                disabled
                >
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder='Ask BERT a question...'
                    onKeyPress={answerQuestion}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    { ...disabled ? 'disabled' : '' }
                    value={input}
                />
                <IconButton
                    { ...disabled ? 'disabled' : '' }
                    onClick={()=> {
                        setInput('');
                    }}
                >
                    <ClearIcon />
                </IconButton>
            </Paper>
        </>
    );
}

export default SearchBar;