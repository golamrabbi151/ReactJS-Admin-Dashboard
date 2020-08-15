import React from 'react'
import { Link } from 'react-router-dom'

export default function LoggedOutLinks() {
    return (
        <div>
            <Link className="nav-link-aditional" to=""> Home </Link>
            <Link className="nav-link-aditional" to="/login"> Login </Link>
            <Link className="nav-link-aditional" to="/register"> SignUp </Link>
        </div>
    )
}
