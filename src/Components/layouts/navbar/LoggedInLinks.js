import React from 'react'
import { Link } from 'react-router-dom'
import {signout} from '../../../store/actions/authAction'
import {connect} from 'react-redux'

 function LoggedInLinks(props) {
    
    return (
        <div>
            <Link className="nav-link-aditional" to="/dashboard"> Dashboard </Link>
           
            <a className="nav-link-aditional" onClick={()=>{props.signout(props.auth.token)}} style={{ cursor: 'pointer' }}>SignOut</a>
            <a className="nav-link-aditional ml-2" style={{ color:'black', background: '#00BFFF', borderRadius: '30%', padding : '5px' }}>{props.auth.profile.name}</a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: (token) => {dispatch(signout(token))}
    }
}
const mapstateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(LoggedInLinks)