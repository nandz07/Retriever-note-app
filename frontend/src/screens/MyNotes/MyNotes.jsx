import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import axios from 'axios'

function MyNotes() {
  const [notes,setNotes]=useState([])
  const deletHandler = () => {
    if (window.confirm("Are you sure")) {

    }
  }
  const fetchNotes=async()=>{
    const {data}=await axios.
    get(`/api/notes`)
    setNotes(data);
  }
  useEffect(()=>{
    fetchNotes()
  },[])
  return (

    <MainScreen title={"Welcome back Nandakumar...!"}>
      <Link to="/creatnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
          Create New Note
        </Button>
      </Link>
      <Accordion>
        {
          notes.map((note, index) => (
            <Accordion.Item eventKey={index} key={note._id}>
              <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                  <span
                    style={{
                      color: "black",
                      border: "none",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18
                    }}
                  >
                    <Accordion.Header
                      as={Card.Text}
                      variant="link"
                      eventKey={index}

                    >
                      {note.title}
                    </Accordion.Header>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button variant='danger' className='mx-2' onClick={() => deletHandler(note._id)}>Delete</Button>
                  </div>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge bg='success' text='white'>
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {note.content}
                      </p>
                      <footer className="blockquote-footer">
                        Created on 16/10/2023
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>

          ))
        }
      </Accordion>


    </MainScreen>
  )
}

export default MyNotes