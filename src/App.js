import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
