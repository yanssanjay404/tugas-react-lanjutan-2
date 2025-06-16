import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { genres as initialGenres, authors as initialAuthors } from './data';
import GenreForm from './components/GenreForm';
import GenreList from './components/GenreList';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';

function App() {
  const [genres, setGenres] = useState(initialGenres);
  const [authors, setAuthors] = useState(initialAuthors);

  const addGenre = (genre) => {
    setGenres([...genres, { id: Date.now(), ...genre }]);
  };

  const updateGenre = (id, newName) => {
    setGenres(genres.map(g => g.id === id ? { ...g, name: newName } : g));
  };

  const deleteGenre = (id) => {
    setGenres(genres.filter(g => g.id !== id));
  };

  const addAuthor = (author) => {
    setAuthors([...authors, { id: Date.now(), ...author }]);
  };

  const updateAuthor = (id, newName) => {
    setAuthors(authors.map(a => a.id === id ? { ...a, name: newName } : a));
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter(a => a.id !== id));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Panel: Genre & Author</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card body>
            <GenreForm onAdd={addGenre} />
            <GenreList genres={genres} onUpdate={updateGenre} onDelete={deleteGenre} />
          </Card>
        </Col>
        <Col md={6}>
          <Card body>
            <AuthorForm onAdd={addAuthor} />
            <AuthorList authors={authors} onUpdate={updateAuthor} onDelete={deleteAuthor} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
