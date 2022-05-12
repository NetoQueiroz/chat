import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joão@mail.com',
        data: new Date(2022, 5, 9),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'pedro',
        email: 'pedro@mail.com',
        data: new Date(2022, 5, 11),
        mensagem: 'Olá, tudo bem sim...'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice} //se usar do banco, usa IdleDeadline.
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}
      </div>
    );
  }
}

export default App;
