import React, { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import {books} from './Books'

function Book(props) {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined)

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])
  if (currentBook) {
    return (
      <div>
        <h1>{currentBook.title}</h1>
      </div>
    );
  } 
    return (
    <div>
      <h1>Pas de livre</h1>
    </div>
  );

}

export default Book;