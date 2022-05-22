import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ClearIcon from '@mui/icons-material/Clear';
import { InputBase, Paper, IconButton } from '@mui/material';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SearchBar = ({ disabled, answerQuestion }) => {

    const [input, setInput] = useState('');
    const [micActive, setMicActive] = useState(false);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true });


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
                    {...disabled ? 'disabled' : ''}
                    value={input}
                />

                {
                    input === '' ?
                        <IconButton
                        onClick={(e) => {
                            if (!browserSupportsSpeechRecognition) {
                                alert('use a different browser to enable speech to text');
                            }
                            setMicActive(!micActive);
                            if (micActive) {
                                startListening();
                                console.log('listening')
                                setInput(transcript);
                            } else {
                                SpeechRecognition.abortListening();
                                console.log('stopped listening')
                                setInput(transcript);
                                resetTranscript();
                            }
                        }}>
                            <MicIcon />
                        </IconButton>
                        :
                        <IconButton
                            {...disabled ? 'disabled' : ''}
                            onClick={() => {
                                // resetTranscript();
                                setInput('');
                            }}
                        >
                            <ClearIcon />
                        </IconButton>
                }
            </Paper>
        </>
    );
}

export default SearchBar;