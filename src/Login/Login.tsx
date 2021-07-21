import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" >
                Submit
            </Button>
        </Form>
    )
}

export default Login
