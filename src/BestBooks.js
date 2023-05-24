import React from 'react';
import { useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

export default function BestBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books')
      console.log(response.data)
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
  
      {books.length > 0 ? (
        <Carousel>
        {books.map((book) => (
            <Carousel.Item key={book.id}>
              <p>{book.title}</p>
              <p>{book.description}</p>
            </Carousel.Item>
        ))}
        </Carousel>
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </>
  )
      }
  
