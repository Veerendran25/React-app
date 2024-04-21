import React from 'react'
import './index.css'
import img from './images/g.png'
import { Container, Form,FloatingLabel ,Button,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const LogIn = () => {
return (
    <div>
        <Container className='form'>
        <Card>
            <Card.Img variant='top' src={img} className='rounded '></Card.Img>
            <Card.Title className='d-flex justify-content-center' style={{
                fontFamily:"monospace",
                fontSize:30,
                fontWeight:1000,
                background:'linear-gradient(to left ,red,blue,red,blue,red)',
                WebkitTextFillColor:'transparent',
                WebkitBackgroundClip:"text",
            }}>Club LogIn</Card.Title>
            <Card.Body>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant='outline-success' className='btn'><Link to='/Header' style={{textDecoration:'none' ,color:'green'}}>LogIn</Link></Button>
            </Card.Body>
        </Card>
        </Container>    
    </div>
)
}

export default LogIn
