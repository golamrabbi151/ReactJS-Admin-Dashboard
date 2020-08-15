import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signin } from '../../store/actions/authAction'
import {Redirect, Link} from 'react-router-dom'
import '../../style/login.css';
import {FaGoogle,FaFacebookF,FaTwitter,} from 'react-icons/fa'

function Login(props) {
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        let nState = {
            ...state,
            [e.target.id]: e.target.value
        }
        setState(nState)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
        props.signin(state);
    }
    const { loginError, auth} = props;
    // console.log(loginError)
        if (auth.isLoggedIn){
            return <Redirect to="/" />
        }
    return (
        <div className="container-fluid col-md-6 login-container" >
            <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4  login-form">
                    <div>
                        <h3 className="text-center login-text-h3">Login</h3>
                        {/* <img src={} alt={} /> */}
                    </div>
                <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} className="form-control login-form-control" id="username" required   placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control login-form-control login-input-field" id="password" required placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">LOGIN</button>
                <div className="text-center bg-warning mt-2">
                    {loginError ? loginError : null}
                </div>
            </form>
            {/* <div className="signup-with-div">
                <p>Or Sign Up With</p>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <ul>
                        <li className="social-login-list social-facebook" >{<FaFacebookF/>}</li>
                        <li className="social-login-list social-twitter">{<FaTwitter/>}</li>
                        <li className="social-login-list social-google">{<FaGoogle/>}</li>
                    </ul>
                    </div>                  
                </div>
            </div> */}
            <div className="donot-account">
                <p>Don't have an account? <Link className="nav-link-aditional" to="/register"> SignUp </Link></p>
            </div>
                </div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginError: state.auth.authError,
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credentials) => dispatch(signin(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)