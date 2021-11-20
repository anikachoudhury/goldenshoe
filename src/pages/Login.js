import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios';

function Login() {

    const [nameReg, setNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            name: nameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    }

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            email: user,
            password: pass
        }).then(response => {

            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus("Welcome " + response.data[0].name);
            }
            console.log(response);
        })
    }

    return (
        <div className="login">
            <div className="login-card">
                <div className="login-page">
                    <h2>Sign Up</h2>
                    <p>Why not create an account and make shopping next time easier?</p>
                    <div>
                        <label htmlFor="name">Enter your name</label><br/>
                        <input type="text" placeholder="E.g. John Smith" onChange={(e) => {setNameReg(e.target.value)}}></input><br/>
                    </div>

                    <div>
                        <label htmlFor="email" className="email">Enter your email address</label><br/>
                        <input type="email" placeholder="example@gmail.com" onChange={(e) => {setEmailReg(e.target.value)}}></input><br/>
                    </div>

                    <div>
                        <label htmlFor="password" className="pw">Enter a password</label><br/>
                        <input type="password" placeholder="****" onChange={(e) => {setPasswordReg(e.target.value)}}></input>
                    </div>

                    <button onClick={register}>Create Account</button>
                </div>

                <div className="signup">
                    <h2>Log In</h2>

                    <div>
                        <label htmlFor="email" className="email">Enter your email address</label><br/>
                        <input type="email" placeholder="example@gmail.com" onChange={(e) => {setUser(e.target.value)}}></input><br/>
                    </div>

                    <div>
                        <label htmlFor="password" className="pw">Enter your password</label><br/>
                        <input type="password" placeholder="****" onChange={(e) => {setPass(e.target.value)}}></input>
                    </div>

                    <button onClick={login}>Log In</button>
                    <h5>{loginStatus}</h5>
                </div>
            </div>
        </div>
    )
}

export default Login;
