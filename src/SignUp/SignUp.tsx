import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter Password" />
            </Form.Group>
            <Button variant="primary" >
                Submit
            </Button>
        </Form>
    )
}

export default SignUp
