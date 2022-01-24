import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title="TextUtils" favNum={24} aboutText='About App' />
      {/* <Navbar /> */}
      <TextForm heading='Enter text to analyze'/>
    </>
  );
}

export default App;
