import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import { Link,useNavigate } from 'react-router-dom'


export const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const userInfo=localStorage.getItem("userInfo")
    if(userInfo){
        navigate("/mynotes");
    }else{
      navigate("/");
    }
},[navigate])
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                  <div>
                    <h1 className='title'>Welcome to note Retriever</h1>
                    <p className='subtitle'>One safe place for all your notes.</p>
                    <div className="buttonContainer">
                    <Link to="/login">
                        <Button size='large' className='landingButton'>Login</Button>
                    </Link>
                      <Link to="/register">
                        <Button size='large' variant='outline-primary' className='landingButton'>Sign up</Button>
                      </Link>
                    </div>
                  </div>
                    
                </div>
            </Row>
        </Container>
    </div>
  )
}
