// import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type )=>{  
    // How can I add style of alert over here ? ANS : Boot strap has some keywords like sucess which I entered in type will bring green color so the mistake in spelling will not allow the alert to be grean.
    console.log("FRoom textform: ", message,  " DVADSOADSOCM ", type)
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  
  }

  const toggleMode  = ()=>{
    if (mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#012f5d';
      showAlert("Dark mode has been enabled", "Success");
      document.title="Textutils - Dark Mode"
      // setInterval(() => {
      //   document.title="DARK MODE"
      // }, 1500);
      // setInterval(() => {
      //   document.title="TEXTUTILS"
      // }, 1900);
    }
    else{
      setmode('light'); 
      document.body.style.backgroundColor = 'White';
      showAlert("Light mode has been enabled", "success");
      document.title="Textutils"
    }
  }
  return (
    <>
    <Router>
      {/* <Routes> */}
      {/* <Navbar title=" Portfolio " Link="2023" about= 'About'  mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title=" Textutils "  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <div className="container" my-3="True"> 
      <switch>
        {/* It is important to use "exact" to match exact pathway */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Get Desired Text Result" mode={mode}/>
          </Route>
      </switch>
    </div>
    {/* </Routes> */}
    </Router>
    </>
            
    );
}

export default App;
