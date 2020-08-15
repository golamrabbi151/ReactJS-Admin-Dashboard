import React from 'react';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    window.location.href='/dashboard';
}

const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>

            <Button onClick={Dashboard}>Click to Login</Button>
        </div>
    );
};

export default Login;