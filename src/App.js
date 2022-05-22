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

  const passageRef = useRef(null);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model Loaded');
  }

  useEffect(() => {
    loadModel();
  }, []);



  return (
    <>
      <NavBar />
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