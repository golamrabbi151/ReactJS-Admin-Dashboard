import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaGoogle,FaFacebookF,FaTwitter,} from 'react-icons/fa'
import '../../style/login.css';
import {connect} from 'react-redux'
import {signup} from '../../store/actions/authAction'


function Register (props) {
    const [state, setState] = useState({
        name: '',
        phone_number: '',
        email:'',
        password: ''
    })
    const handleChange= (e) =>{
        let nState = {...state,
            [e.target.id] : e.target.value
        }
        setState(nState)
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(state)
        props.signup(state)
    }
    // const { signupError, auth} = props;
    //     if (auth.uid){
    //         return <Redirect to="/" />
    //     }
    
        return (
            <div className="container-fluid col-md-6 login-container" >
            <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4  login-form">
                    <div>
                        <h3 className="text-center login-text-h3">Register</h3>
                        {/* <img src={} alt={} /> */}
                    </div>
                <form className="form-group" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={handleChange}  className="form-control" id="name" required   placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" required   placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" onChange={handleChange} className="form-control" id="phone_number" required   placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control login-input-field" id="password" required placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
                <div className="text-center bg-warning mt-2">
                    
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
                <p>Do you have an account?<Link className="nav-link-aditional" to="/login"> Login </Link></p>
            </div>
                </div>
            </div>
            </div>
        </div>
        )
    
}
const mapStateToProps= (state) =>{
    return{
        auth: state.auth,
        signupError: state.auth.authError
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{
        signup: (newUser) => dispatch(signup(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)