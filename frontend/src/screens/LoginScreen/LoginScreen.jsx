import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginScreen.css'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'

function LoginScreen({history}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    const dispatch=useDispatch()

    const userLogin=useSelector((state)=>state.userLogin)
    const {loading,error,userInfo}=userLogin

    useEffect(()=>{
        if(userInfo){
            navigate('/mynotes')
        }
    },[navigate,userInfo])

    const submitHandler= async(e)=>{
        e.preventDefault()
        dispatch(login(email, password));
    }
    return (
        <MainScreen title="LOGIN">
            <div className="logincontainer">
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form on onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mt-3'>
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginScreen