import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addBook = () => {
    axios
      .post("http://localhost:3001/api/books", { title, author })
      .then((res) => setBooks([...books, res.data]))
      .catch((err) => console.error(err));
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:3001/api/books/${id}`)
      .then(() => setBooks(books.filter((book) => book._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Liste des livres</h1>

      <div>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Ajouter</button>
      </div>

      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author}
            <button onClick={() => deleteBook(book._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
