import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function BookFormModal({ bookSubmit }) {
    
    const [show, setShow] = useState(false); // For toggling the Modal
    const [title, setTitle] = useState(''); //To hold the title of the book
    const [description, setDescription] = useState(''); // To hold the description of the book
    const [status, setStatus] = useState('Pending'); // To hold the status of the book

    // Functions to handle the closing/opening of the Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Function to handle the book submission
    const handleBookSubmit = async (event) => {
        event.preventDefault(); //Prevent the default form submission
        const book = { title, description, status };

        try {
            // The new book is sent to the server w/ a POST request, and the response from the server
            const response = await axios.post('http://localhost:3001/books', book);
            // Invoke the onBookSubmit function with the response data, passed up as props
            bookSubmit(response.data);
            setTitle(''); //// Reset the title state
            setDescription(''); // Reset the description state
            setStatus('Pending'); //// Reset the status state
            handleClose(); // Close the Modal
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Book
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A New Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBookSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status:</Form.Label>
                            <Form.Select
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value="Plan to Read">Plan to Read</option>
                                <option value="Currently Reading">Currently Reading</option>
                                <option value="Read">Read</option>
                                <option value="Pending">Pending</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}