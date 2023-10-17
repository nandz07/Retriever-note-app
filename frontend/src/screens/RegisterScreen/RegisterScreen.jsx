import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import Loading from '../../components/Loading';

function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState(
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(email);
        if (password != confirmpassword) {
            setMessage('Passwords do not match !')
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                setLoading(true)
                const { data } = await axios.post(
                    "/api/users",
                    {
                        name,
                        pic,
                        email,
                        password
                    },
                    config
                )
                console.log(data);
                localStorage.setItem("userInfo", JSON.stringify(data))
                setLoading(false)
            } catch (error) {
                setErr(error.response.data.message)

            }
        }
    }

    const postDetails = (pics) => {
        if (!pics) {
            return setPicMessage('Please select an image')
        }
        setPicMessage(null)
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData()
            data.append('file', pics)
            data.append('upload_preset', 'noteretiever')
            data.append('cloud_name', 'ddecjumze')
            fetch("https://api.cloudinary.com/v1_1/ddecjumze", {
                method: "post",
                body: data,
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                setPic(data.url.toString())
            }).catch((err) => {
                    console.log(err);
                })
        } else {
            return setPicMessage('please select an image')
        }
    }

    return (<>
        <MainScreen title="REGISTER">
            {err && <ErrorMessage variant="danger">{err}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}
            <div className="logincontainer">
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    {picMessage && (
                        <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
                    )}
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                            id="custom-file"
                            type="file"
                            onChange={(e)=>postDetails(e.target.files[0])}
                        // isInvalid={!!errors.file}
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
    </>
    )
}

export default RegisterScreen