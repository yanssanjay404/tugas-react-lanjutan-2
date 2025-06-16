import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AuthorForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({ name });
      setName('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5 className="mb-3">Add Author</h5>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">Add</Button>
    </Form>
  );
}
