// import './App.css';
import Login from './Login';
import Dashboard from './Dashboard'
import React, { useState } from 'react';
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
        {!isLogin && <Login />}
      </div>
      {/* just for temporary before Login work */}
      <Link to="/dashboard" onClick={() => setLogin(true)}>masuk tanpa login</Link>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
