import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const fullnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }

    try {
        setError('') //setting the error to empty since now there is no error
        setLoading(true)
        await signup(fullnameRef.current.value, emailRef.current.value, passwordRef.current.value)
        navigate('/')
    } catch(error) {
        console.log(error)
        setError('failed to create an account')
    }

    setLoading(false)
        
  }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign up</h2>
                
                {error && <Alert variant = "danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='fullname'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type='fullname' ref={fullnameRef} required />
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled = {loading} className='w-100' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/login">Log In</Link> 
        </div>
    </>
  )
}
