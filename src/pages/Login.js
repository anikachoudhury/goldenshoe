import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login-card">
                <div className="login-page">
                    <h2>Sign Up</h2>
                    <p>Why not create an account and make shopping next time easier?</p>
                    <div>
                        <label for="name">Enter your name</label><br/>
                        <input type="text" placeholder="E.g. John Smith"></input><br/>
                    </div>

                    <div>
                        <label for="email" className="email">Enter your email address</label><br/>
                        <input type="email" placeholder="example@gmail.com"></input><br/>
                    </div>

                    <div>
                        <label for="password" className="pw">Enter a password</label><br/>
                        <input type="password" placeholder="****"></input>
                    </div>

                    <button>Create Account</button>
                </div>

                <div className="signup">
                    <h2>Log In</h2>

                    <div>
                        <label for="email" className="email">Enter your email address</label><br/>
                        <input type="email" placeholder="example@gmail.com"></input><br/>
                    </div>

                    <div>
                        <label for="password" className="pw">Enter your password</label><br/>
                        <input type="password" placeholder="****"></input>
                    </div>

                    <button>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
