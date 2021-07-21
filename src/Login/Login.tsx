import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

import useForm from '../Hooks/useForm'

const Login = () => {


    const [input, handleChange] = useForm({
        email: "",
        password: ""
    })



    useEffect(() => {
        console.log(input);
    }, [input])


    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" >
                Submit
            </Button>
        </Form>
    )
}

export default Login
