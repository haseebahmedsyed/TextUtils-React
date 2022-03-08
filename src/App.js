import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState({
    msg: null,
    type: null
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert({ msg: null, type: null })
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils -Dark Mode"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils -Light Mode"
    }
  }

  return (
    <>

    {/* <Router> */}

        <Navbar title='Text Utils' home="Home" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />

        {/* <Routes> */}
          {/* <Route path="/acc" exact element = { */}
            {/* <div className='container my-3'><Accordion/></div> */}
          {/* }/> */}
          {/* <Route path="/txtBar" exact element = { */}
          <div className='container my-3'>
            <TextBar mode={mode} showAlert={showAlert} />
          </div>
          {/* }/> */}
          
        {/* </Routes> */}


    {/* </Router> */}



    </>
  );
}

export default App;
