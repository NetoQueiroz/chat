import React from 'react';
import './App.css';
import Comentario from './components/comentarios';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="joao" email="joão@email.com" data={new Date(2022, 5, 9)}>
        Olá, tudo bem?
      </Comentario>

      <Comentario nome="maria" email="maria@email.com" data={new Date(2022, 5, 11)}>
        Olá, tudo bem sim.
      </Comentario>
    </div>
  );
}

export default App;
