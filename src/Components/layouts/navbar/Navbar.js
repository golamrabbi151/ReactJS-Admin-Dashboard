import React from 'react'
import {Container,Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../../../style/navbar.css'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import {connect} from 'react-redux'

    const NavBar = (props) => {
    const {auth} = props
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">colourBangla</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                {auth.isLoggedIn ? <LoggedInLinks/> : <LoggedOutLinks/>}
                
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(NavBar)
