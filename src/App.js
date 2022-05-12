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

  adicionarComentario = () =>{
    console.log("texte de adicionando comentario")

    const novoComentario = {
        nome: 'Maria',
        email: 'Maria@mail.com',
        data: new Date(2022, 5, 11),
        mensagem: 'Olá, pessoal !!!'
    }
    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({comentarios:lista})
this.setState({
  comentarios :[...this.state.comentarios, novoComentario]
})

  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice} 
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}
        <button onClick={this.adicionarComentario}>Adicionar um comentario</button>
      </div>
    );
  }
}

export default App;
