// Mengimpor hook useState dari React dan komponen dari React-Bootstrap
import { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

// Komponen AuthorList menerima props: authors (array data), onUpdate (fungsi update), onDelete (fungsi hapus)
function AuthorList({ authors, onUpdate, onDelete }) {
  // State untuk menyimpan ID author yang sedang diedit
  const [editId, setEditId] = useState(null);
  // State untuk menyimpan nama author yang sedang diedit
  const [editName, setEditName] = useState('');

  // Fungsi untuk memulai proses edit: menyimpan ID dan nama author ke state
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  // Fungsi untuk menyimpan hasil edit (update)
  const handleUpdate = () => {
    onUpdate(editId, editName); // Memanggil fungsi update dari props
    setEditId(null);            // Reset editId
    setEditName('');            // Reset editName
  };

  // Bagian return: tampilan UI dari komponen
  return (
    <>
      {/* Judul section */}
      <h5>Author List</h5>

      {/* List data author menggunakan ListGroup dari Bootstrap */}
      <ListGroup>
        {/* Melakukan iterasi terhadap array authors */}
        {authors.map((author) => (
          // Setiap item ditampilkan dalam ListGroup.Item dengan class flex untuk layout
          <ListGroup.Item key={author.id} className="d-flex justify-content-between align-items-center">
            
            {/* Jika author sedang dalam mode edit (ID-nya cocok dengan editId) */}
            {editId === author.id ? (
              <>
                {/* Form input untuk mengedit nama author */}
                <Form.Control
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)} // Update editName saat diketik
                  className="me-2" // Margin end untuk jarak antara input dan tombol
                />
                {/* Tombol untuk menyimpan perubahan */}
                <Button variant="success" size="sm" onClick={handleUpdate}>Save</Button>
              </>
            ) : (
              // Jika tidak sedang diedit, tampilkan nama author dan tombol aksi
              <>
                {author.name}
                <div>
                  {/* Tombol edit: saat diklik, memicu handleEdit */}
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(author.id, author.name)}>Edit</Button>
                  {/* Tombol hapus: langsung memanggil fungsi onDelete */}
                  <Button variant="danger" size="sm" onClick={() => onDelete(author.id)}>Delete</Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

// Mengekspor komponen agar bisa digunakan di file lain
export default AuthorList;
