import React from "react";

// props ={
//     placeholder = "Nome"
//     type = "text"
//     id = "nomeSobrenome"
//     value = {this.state.nomeSobrenome}
//     name="nomeSobrenome"
//     onChange={this.handleChange}
// }

export default function CaixaTexto(props) {
    function valida(e){
        props.onChange(e.target.name, e.target.value)
    }
  return (
    <input
      className="campo"
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      name={props.name}
      onChange={valida}
    />
  );
}
