import React from 'react';
import "./index.css";
import NavBar from './components/NavBar';
import AnswerCard from './components/AnswerCard';

import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import Loader from 'react-loader';

import { useState, useEffect, useRef } from 'react';
import { TextField, Typography } from '@mui/material';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);
  const [disabled, setDisabled] = useState(true); // disabled to start

  const passageRef = useRef(null);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model Loaded');
  }

  const getQuestion = (e) => {
    if(e.which === 13) { // enter key was pressed
      setQuestion(e.target.value);
      console.log(e.target.value);

      answerQuestion();
    }
  }

  const answerQuestion = async () => {
    if(question !== null && model !== null) {
      console.log('question submitted');
      const passage = passageRef.current.value;
      // console.log(passage);

      const answers = await model.findAnswers(question, passage);
      setAnswer(answers);
      console.log(answers);
    }
  }

  useEffect(() => {
    loadModel();
    setDisabled(false);
  }, []);



  return (
    <>
      <NavBar disabled={disabled} getQuestion={getQuestion}/>
      {
        model == null ?
        <Loader />
        : 
        <div style={{
          marginTop: '5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '3rem',
          marginRight: '3rem'
          }}
          >
          <Typography variant='h6'>Passage</Typography>
          <TextField inputRef={passageRef} />
          <Typography variant='h6'>Answers</Typography>
          <AnswerCard />
        </div>
      }
    </>
  );
}

export default App;