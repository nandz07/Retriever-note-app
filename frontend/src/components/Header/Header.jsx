import React from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  return (
    <>
    <Navbar expand="lg" bg='primary' expanded='lg' variant='dark' className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-around'>
        <Navbar.Brand ><Link to="/">
        Note Retriever
                    </Link>
          </Navbar.Brand>
          <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
            <Link to="mynotes">
                        My notes
                    </Link>
            </Nav.Link>
            <NavDropdown title="Nandakumar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("userInfo")
                navigate("/");
              }}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header