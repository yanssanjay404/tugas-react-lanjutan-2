// Mengimpor hook useState dari React dan komponen-komponen UI dari React-Bootstrap
import { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

// Komponen GenreList menerima props: genres (array data genre), onUpdate (fungsi untuk update), dan onDelete (fungsi untuk hapus)
function GenreList({ genres, onUpdate, onDelete }) {
  // State untuk menyimpan ID genre yang sedang diedit
  const [editId, setEditId] = useState(null);
  // State untuk menyimpan nama genre yang sedang diketik saat proses edit
  const [editName, setEditName] = useState('');

  // Fungsi untuk memulai proses edit dengan mengisi state editId dan editName
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  // Fungsi untuk menyimpan hasil perubahan data genre
  const handleUpdate = () => {
    onUpdate(editId, editName); // Memanggil fungsi update dari parent
    setEditId(null);            // Reset kembali editId
    setEditName('');            // Reset kembali input editName
  };

  // Bagian tampilan komponen
  return (
    <>
      {/* Judul section list genre */}
      <h5>Genre List</h5>

      {/* Komponen ListGroup dari Bootstrap untuk menampilkan daftar genre */}
      <ListGroup>
        {/* Iterasi array genres */}
        {genres.map((genre) => (
          // Setiap genre ditampilkan dalam ListGroup.Item dengan layout fleksibel
          <ListGroup.Item key={genre.id} className="d-flex justify-content-between align-items-center">

            {/* Jika genre sedang dalam mode edit */}
            {editId === genre.id ? (
              <>
                {/* Input form untuk mengedit nama genre */}
                <Form.Control
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)} // Update editName saat user mengetik
                  className="me-2" // Memberi jarak kanan
                />
                {/* Tombol untuk menyimpan perubahan */}
                <Button variant="success" size="sm" onClick={handleUpdate}>Save</Button>
              </>
            ) : (
              // Jika tidak sedang diedit, tampilkan nama genre dan tombol edit & delete
              <>
                {genre.name}
                <div>
                  {/* Tombol edit: memicu handleEdit dengan data genre */}
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(genre.id, genre.name)}>Edit</Button>
                  {/* Tombol delete: memicu fungsi onDelete dari parent */}
                  <Button variant="danger" size="sm" onClick={() => onDelete(genre.id)}>Delete</Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

// Mengekspor komponen agar dapat digunakan di tempat lain
export default GenreList;
