import React from 'react';
import './Login.css';
// import logo from '../assets/LOGOCERTO.png';

function Login() {
    return (
        <div className="login-container">
            <header className="login-header">
                {/* <img src={ } alt="Logo ETEC" className="logo-login" /> */}
            </header>

            <div className="login-box">
                {/* <img src={logo} alt="Logo ControlKey" className="logo-central" /> */}
                <h2>CONTROLKEY</h2>

                <div className='input-group'>
                    <input type='text' placeholder='Username' />
                </div>
                <div className='input-group'>
                    <input type='password' placeholder='Password' />
                </div>
                <button className='btn-login'>Entrar</button>
                <a href="/" className='esqueceu-senha'>Esqueceu a senha?</a>
            </div>
        </div>
    );
}

export default Login;
