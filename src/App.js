import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// wherher dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
      var intervalId1 = setInterval(() => {
        document.title = 'Its Great! Buy now';
      }, 3000)
      var intervalId2 = setInterval(() => {
        document.title = 'TextUtils is amazing!';
      }, 5000)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light Mode';
      clearInterval(intervalId1)
      clearInterval(intervalId2)
    }
  }
  return (
    <>
      <Alert alert={alert} />
      <Navbar title="TextUtils" favNum={24} aboutText='About App' mode={mode} toggleMode={toggleMode} />
      <TextForm showAlert={showAlert} heading='Enter text to analyze' mode={mode} />
      {/* <About /> */}
      {/* <Router>
        <Navbar title="TextUtils" favNum={24} aboutText='About App' mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter text to analyze' mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
