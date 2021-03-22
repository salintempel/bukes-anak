import React from 'react'

export default function Login() {
    return (
        <div className="Login" >
            <form action="" method="post" className="form-login">

                <input placeholder="email" type="email" name="email" id="email" autocomplete="off" />

                <input placeholder="password" type="password" name="password" id="password" autocomplete="off" />
                <button type="submit" onClick="" className="btn-login">Login</button>
            </form>
            <p>masuk tanpa login</p>
        </div>
    )
}
