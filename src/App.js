// import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isLogin, setLogin] = useState(false)
  return (
    <Router>
      <div className="App">
        {/* just for temporary before Login work */}
        <div className="temp" style={{ "text-align": "center" }}>
          <Link to="/dashboard" onClick={() => setLogin(true)} >masuk tanpa login</Link> |
          <Link to="/" onClick={() => setLogin(false)}>home</Link>
        </div>

        {isLogin && <Sidebar />}
        {!isLogin && <Login />}
      </div>
    </Router>
  );
}

export default App;
