import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                  <div>
                    <h1 className='title'>Welcome to note Retriever</h1>
                    <p className='subtitle'>One safe place for all your notes.</p>
                    <div className="buttonContainer">
                    <Link to="mynotes">
                        <Button size='large' className='landingButton'>Login</Button>
                    </Link>
                      <a href="/register">
                        <Button size='large' variant='outline-primary' className='landingButton'>Sign up</Button>
                      </a>
                    </div>
                  </div>
                    
                </div>
            </Row>
        </Container>
    </div>
  )
}
