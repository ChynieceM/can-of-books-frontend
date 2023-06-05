import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

//book prop -- book obj to be updated, nookUpdate --function called when the book is to be updated
export default function EditBookModal({ book, onBookUpdate }) {
    //The initial states for title, description, 
    //and status are set to the properties of the book prop.
    const [show, setShow] = useState(false); // For toggling the Modal
    const [title, setTitle] = useState(book.title); //To hold the title of the book
    const [description, setDescription] = useState(book.description); // To hold the description of the book
    const [status, setStatus] = useState(book.status); // To hold the status of the book

    //hiding and showing the modal by updating the show state
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //gets triggered when the user submits the form
    const handleBookUpdate = (e) => {
        //prevents unecessary loading 
        e.preventDefault();
        // creates a new book object with the updated title, description, and status
        const updatedBook = { title, description, status };
        // calls the bookUpdate function, passing it the new book object and the id of the book we want to update.
        onBookUpdate(updatedBook, book._id);
        //calls handleClose to close the modal.
        handleClose();
    }
    useEffect(() => {
        setTitle(book.title);
        setDescription(book.description);
        setStatus(book.status);
    }, [book]);
    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Edit Book
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit A Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* onSubmit is set to handleBookUpdate, so when the user submits the form, the handleBookUpdate function is called. */}
                    <Form onSubmit={handleBookUpdate}>
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