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
  // const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);
  const [disabled, setDisabled] = useState(true); // disabled to start

  const passageRef = useRef(null);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model Loaded');
  }

  // const getQuestion = async (e) => {
  //   if (e.which === 13) { // enter key was pressed
  //     setQuestion(e.target.value);
  //     console.log(e.target.value);
  //   }
  // }

  const answerQuestion = async (e) => {
    if(e.which === 13 && model !== null) {
      console.log('question submitted');
      const passage = passageRef.current.value;
      const question = e.target.value;
      console.log(`question is: ${question} \npassage is: ${passage}`);

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
      <NavBar disabled={disabled} answerQuestion={answerQuestion} />
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
            <TextField 
              inputRef={passageRef}
              multiline={true}
              />
            <Typography variant='h6'>Answers</Typography>
            {answer ? answer.map((ans, idx) => <AnswerCard key={idx} index={idx + 1} answer={ans.text} />)
              :
              <Typography>No answers yet! Ask BERT a question.</Typography>
            }
          </div>
      }
    </>
  );
}

export default App;