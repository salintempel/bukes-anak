import React from 'react';
import Dashboard from './Dashboard';
import Profil from './Profil';
import Anak from './Anak';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <nav>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/anak">Anak</Link></li>

        </nav>
      </aside>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/anak">
          <Anak />
        </Route>
      </Switch>
    </div>
  )
}