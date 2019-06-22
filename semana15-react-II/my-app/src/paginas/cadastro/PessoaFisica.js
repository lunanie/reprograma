import React from "react";
import Legenda from "../../componentes/formulario/Legenda";
import CaixaTexto from "../../componentes/formulario/CaixaTexto";
import Grupo from "../../componentes/formulario/Grupo";
import BotaoSubmit from "../../componentes/formulario/BotaoSubmit";

export default class PessoaFisica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeSobrenome: {
        valor: "",
        erro: ""
      },
      numerocpf: {
        valor: "",
        erro: ""
      },
      datanascimento: {
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
    this.props.alteraConteudo(this.props.conteudo);
    e.preventDefault();
    console.log("enviou");
  };
  handleChange = (nomeDoInput, valorDoInput, erro = "") => {
    this.setState({
      [nomeDoInput]: {
        valor: valorDoInput,
        erro: erro
      }
    });
  };

  estaDesabilitado = () => {
    if (
      !this.state.nomeSobrenome.valor ||
      this.state.nomeSobrenome.erro ||
      !this.state.numerocpf.valor ||
      this.state.numerocpf.erro ||
      !this.state.datanascimento.valor ||
      this.state.datanascimento.erro ||
      !this.state.email.valor ||
      this.state.email.erro ||
      !this.state.senha.valor ||
      this.state.senha.erro
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const desabilitado = this.estaDesabilitado();
    return (
      <div className="pagina">
        <h2>Cadastro Pessoa Fisica</h2>
        <form className="formulario" onSubmit={this.handleSubmit}>
          <Grupo erro={this.state.nomeSobrenome.erro}>
            <Grupo.Legenda htmlForLegenda="nomeSobrenome">
              Nome Completo:
            </Grupo.Legenda>
            <Grupo.CaixaTexto
              required={true}
              placeholder="Nome"
              id="nomeSobrenome"
              type="text"
              value={this.state.nomeSobrenome.valor}
              name="nomeSobrenome"
              onChange={this.handleChange}
            />
          </Grupo>

          <Grupo erro={this.state.numerocpf.erro}>
            <Grupo.Legenda htmlForLegenda="numerocpf">CPF:</Grupo.Legenda>
            <Grupo.CaixaTexto
              required={true}
              type="number"
              placeholder="000.000.000-00"
              id="numerocpf"
              value={this.state.numerocpf.valor}
              name="numerocpf"
              onChange={this.handleChange}
            />
          </Grupo>

          <Grupo erro={this.state.datanascimento.erro}>
            <Grupo.Legenda htmlForLegenda="datanascimento">
              Data de Nascimento:
            </Grupo.Legenda>
            <Grupo.CaixaTexto
              required={true}
              type="text"
              placeholder="dd/mm/aaaa"
              id="datanascimento"
              value={this.state.datanascimento.valor}
              name="datanascimento"
              onChange={this.handleChange}
            />
          </Grupo>

          <Grupo erro={this.state.email.erro}>
            <Grupo.Legenda htmlForLegenda="email">Email:</Grupo.Legenda>
            <Grupo.CaixaTexto
              required={true}
              type="text"
              placeholder="Email"
              id="email"
              value={this.state.email.valor}
              name="email"
              onChange={this.handleChange}
            />
          </Grupo>

          <Grupo erro={this.state.senha.erro}>
            <Grupo.Legenda htmlForLegenda="senha">Senha:</Grupo.Legenda>
            <Grupo.CaixaTexto
              required={true}
              type="password"
              placeholder="Senha"
              id="senha"
              value={this.state.senha.valor}
              name="senha"
              onChange={this.handleChange}
            />
          </Grupo>
          <BotaoSubmit
            desabilitado={desabilitado}
            acaoBotao={this.handleChange}
            className="botao"
          >
            Enviar
          </BotaoSubmit>

          {/* <div>

                    <label htmlFor="nomeSobrenome">Nome Completo:</label>
                    <input className="campo" type="text" placeholder="Nome" id="nomeSobrenome" value={this.state.nomeSobrenome} name="nomeSobrenome" onChange={this.handleChange} />
                    </div>

                    <div>
                    <label htmlFor="numerocpf">CPF:</label>
                    <input className="campo" type="number" placeholder="000.000.000-00" id="numerocpf" value={this.state.numerocpf} name="numerocpf" onChange={this.handleChange} />
                    </div>

                    <div>
                    <label htmlFor="datanascimento">Data de nascimento:</label>
                    <input className="campo" type="number" placeholder="dd/mm/aaaa" id="datanascimento" value={this.state.datanascimento} name="datanascimento" onChange={this.handleChange} />
                    </div>

                    <div>
                    <label htmlFor="email">Email:</label>
                    <input className="campo" type="text" placeholder="Email" id="email" value={this.state.numerocpf} name="email" onChange={this.handleChange} />
                    </div>

                    <div>
                    <label htmlFor="senha">Senha:</label>
                    <input className="campo" type="text" placeholder="Senha" id="senha" value={this.state.numerocpf} name="senha" onChange={this.handleChange} />
                    </div> */}
        </form>
      </div>
    );
  }
}
