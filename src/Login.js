import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from './Dashboard'

export default function Login() {
    return (

        <div className="Login" >
            <form action="" method="post" className="form-login">
                <input placeholder="email" type="email" name="email" id="email" autocomplete="off" />
                <input placeholder="password" type="password" name="password" id="password" autocomplete="off" />
                <button type="submit" onClick="" className="btn-login">Login</button>
            </form>

        </div>

    )
}
