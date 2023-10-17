import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginScreen.css'
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'

function LoginScreen({history}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState("")
    const navigate=useNavigate()

    

    const submitHandler= async(e)=>{
        e.preventDefault()
       try {
        

        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        setLoading(true)
        const {data}=await axios.post(
            "/api/users/login",
            {
                email,
                password
            },
            config
        )
        console.log(data);
        localStorage.setItem("userInfo",JSON.stringify(data))
        setLoading(false)
        navigate("/");
       } catch (error) {
        // setErr(error.response.data.message)
        setErr("invalid email or password")
        alert(err)
        setLoading(false)
       }
    }
    return (
        <MainScreen title="LOGIN">
            <div className="logincontainer">
                {err && <ErrorMessage variant='danger'>{err}</ErrorMessage>}
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