
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

        <Route path="/"  Component={Home} />
        <Route path="/login"  Component={Login} />
    </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
