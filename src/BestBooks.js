import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

function BestBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await axios.get('mongodb://localhost:27017/books')
      const bookData = await response.json();
      setBooks(bookData);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length > 0 ? (
        books.map((book) => {
          <Carousel>
            <Carousel.Item>
              <p>{book.title}</p>
              <p>{book.description}</p>
            </Carousel.Item>
          </Carousel>
        })
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </>
  )

}

export default BestBooks;
