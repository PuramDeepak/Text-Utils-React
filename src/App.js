import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('dark'); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Darkmode has been enabled", "success");
      document.title = 'Textutils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
    <div className='container'>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text='text-light' />
      <Alert alert={alert} />

        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" />
          {/* }/> */}
        {/* </Routes> */}
      </div>
        {/* </Router> */}
        {/* <About /> */}
      
    </>
  );
}

export default App;







