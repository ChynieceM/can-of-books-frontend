import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import axios from 'axios';
import BookFormModal from './BookFormModal';
import EditBookModal from './EditBookModal';


export default function BestBooks() {
  const [books, setBooks] = useState([]); // // To hold the list of books

  // // Use useEffect to fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, [])

  // Function to fetch books from the server
  const fetchBooks = async () => {
    try {
      // Make a GET request to the /books endpoint
      const response = await axios.get('http://localhost:3001/books')
      console.log(response.data)
      // Set the books state with the response data
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  // Function to handle book submission
  let handleBookSubmit = async (book) => {
    try {
      // Make a POST request to the /books endpoint
      const response = await axios.post(`http://localhost:3001/books/${book}`)
      // Fetch the updated list of books
      if (response.status === 200) {
        // If the delete is successful, call `fetchBooks` again to get the updated list
        fetchBooks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookDelete = async (bookId) => {
    try {
      // Making the DELETE request to the server
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      console.log(books)
      // If the delete is successful, call `fetchBooks` again to get the updated list
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };
  const handleBookUpdate = async (updatedBook, bookId) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${bookId}`, updatedBook);
      if (response.status === 200) {
        fetchBooks();
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {books.length > 0 ? (
          <Carousel style={{ width: "50%", height: "50%", marginTop: "20px" }}>
            {books.map((book) => (
              <Carousel.Item key={book._id} >
                <img
                  className="d-block w-100"
                  src="/bg.png"
                  alt=""
                />
                <Carousel.Caption>
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                  <Button style={{marginRight:'10px'}}variant="danger" onClick={() => handleBookDelete(book._id)}>Delete</Button>
                  <EditBookModal book={book} onBookUpdate={handleBookUpdate} />
                  {/* <Button variant="secondary" onClick={() =>handleBookEdit(book._id)}>Edit</Button> */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </div>
      <BookFormModal onBookSubmit={handleBookSubmit} style={{}} />

    </>
  )
}

