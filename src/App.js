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

  const getQuestion = (e) => {
    if(e.which === 13) { // enter key was pressed

    }
  }



  return (
    <>
      <NavBar />
    </>
  );
}

export default App;