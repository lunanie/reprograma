import React from "react";
import Legenda from "../../componentes/formulario/Legenda";
import CaixaTexto from "../../componentes/formulario/CaixaTexto";

export default class PessoaFisica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeSobrenome: {
        valor: "",
        erro: ""
      },
      numeroCpf: {
        valor: "",
        erro: ""
      },
      dataDeNascimento: {
        valor: "",
        erro: ""
      },
      email: {
        valor: "",
        erro: ""
      },
      senha: {
        valor: "",
        erro: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("enviou");
  };
  handleChange = (nomeDoInput, valorDoInput, erro = '') => {
    this.setState({
      [nomeDoInput]: {
          valor: valorDoInput,
          erro: erro,
      }
    });
  };
  render() {
    return (
      <div className="pagina">
        <h2>Cadastro Pessoa Fisica</h2>
        <form className="formulario" onSubmit={this.handleSubmit}>
          <div>
            <Legenda htmlForLegenda="nomeSobrenome">Nome Completo:</Legenda>
            <CaixaTexto
              placeholder="Nome"
              type="text"
              id="nomeSobrenome"
              value={this.state.nomeSobrenome}
              name="nomeSobrenome"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Legenda htmlForLegenda="numeroCpf">CPF:</Legenda>
            <CaixaTexto
              type="text"
              placeholder="000.000.000-00"
              id="numeroCpf"
              value={this.state.numeroCpf}
              name="numeroCpf"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Legenda htmlForLegenda="dataDeNascimento">
              Data de Nascimento:
            </Legenda>
            <CaixaTexto
              type="text"
              placeholder="00/00/0000"
              id="dataDeNascimento"
              value={this.state.dataDeNascimento}
              name="dataDeNascimento"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Legenda htmlForLegenda="email">Email:</Legenda>
            <CaixaTexto
              type="text"
              placeholder="email@email.com"
              id="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Legenda htmlForLegenda="senha">Senha:</Legenda>
            <CaixaTexto
              type="password"
              placeholder="senha"
              id="senha"
              value={this.state.senha}
              name="senha"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
