import { useState } from 'react';
import './App.css'

function App() {
  // 2. Estados
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  // Bonus: función que actualiza el nombre a partir del formulario
  const changeName = (e) => {
    e.preventDefault();
    if (newName.trim() === '') return; // no actualizamos si está vacío
    setName(newName);
    setNewName('');
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2> {/*nombre actual */}

      {/* 4. Lista de nombres predefinidos: clic para cambiar */}
      <ul>
        <li onClick={() => setName('Data')}>Data</li>
        <li onClick={() => setName('Reyes')}>Reyes</li>
        <li onClick={() => setName('Yolanda')}>Yolanda</li>
      </ul>

      {/* Bonus: formulario para añadir un nombre nuevo */}
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
