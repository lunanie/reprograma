import React from "react";

export default class PessoaFisica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      razaosocial: {
        valor: "",
        erro: ""
      },
      cnpj: {
        valor: "",
        erro: ""
      },
      cep: {
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
  handleChange = e => {
    console.log(e.target, "evento onChange");
    const nomeDoInput = e.target.name;
    this.setState({
      [nomeDoInput]: e.target.value
    });
  };

  render() {
    return (
      <div className="pagina">
        <h2>Cadastro Pessoa Juridica</h2>
        <form className="formulario" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="razaosocial">Razão Social:</label>
            <input
              className="campo"
              type="text"
              placeholder="Razao Social"
              id="nomeSobrenome"
              value={this.state.nomeSobrenome}
              name="nomeSobrenome"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="cnpj">CNPJ:</label>
            <input
              className="campo"
              type="text"
              placeholder="CNPJ"
              id="cnpj"
              value={this.state.numerocpf}
              name="cnpj"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="cep">CEP:</label>
            <input
              className="campo"
              type="text"
              placeholder="00000-000"
              id="cep"
              value={this.state.datanascimento}
              name="cep"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="campo"
              type="text"
              placeholder="Email"
              id="email"
              value={this.state.numerocpf}
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              className="campo"
              type="text"
              placeholder="Senha"
              id="senha"
              value={this.state.numerocpf}
              name="senha"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
