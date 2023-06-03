import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // darkmode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040835';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - Dark mode';
    }
     else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light mode';
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils2"  AboutText="About TextUtils"  homies="home"    /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} homies="Home" toggleMode={toggleMode} />
        <Alert alert = {alert} />
        <div className="container my-3">
          <Routes>
            <Route exact  path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>

      </Router>
 
    </>
  );
}

export default App;
