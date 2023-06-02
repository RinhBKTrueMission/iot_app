import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
