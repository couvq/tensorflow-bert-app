import React from 'react';
import "./index.css";
import NavBar from './components/NavBar';

import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import Loader from 'react-loader';

import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState();
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
        <div style={{marginTop: '5rem'}}>
          Model Has been loaded!
        </div>
      }
    </>
  );
}

export default App;