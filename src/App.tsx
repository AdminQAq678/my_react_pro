
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';
import {  } from 'antd';
import Register from './components/Register';
import RequireAuth from './privateRoute';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/"   element={<RequireAuth><Home></Home></RequireAuth>}/>
      <Route path="/login"  Component={Login} />
      <Route path="/register"  Component={Register} />
      </Routes>
    </Router>
    </div>
  );
}



export default App;
