// import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type )=>{  
    // How can I add style of alert over here ?
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
      showAlert("Dark mode has been enabled", "success");
      document.title="EDCRFV"
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
      document.title="123123"
    }
  }
  return (
    <>

<Navbar title=" Portfolio " Link="2023" about= 'About'  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container" my-3="True"> 
<TextForm showAlert={showAlert} heading="Get Desired Text Result" mode={mode}/>
{/* <TextForm /> */}

{/* <About /> */}
</div>



{/* <Navbar title=" Portfolio " Link="2023" /> */}
{/* <Navbar /> */}
  </>
            
    );
}

export default App;
