import React from "react";
import './comentarios.css'


const Comentario = props => (
    <div className="Comentarios">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
);

export default Comentario;