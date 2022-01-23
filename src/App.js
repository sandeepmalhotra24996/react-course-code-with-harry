import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtils" favNum={24} aboutText='About App' />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
