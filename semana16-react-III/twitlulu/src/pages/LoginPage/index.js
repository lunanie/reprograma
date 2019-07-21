import React, { Component, Fragment } from "react";
import Cabecalho from "../../components/Cabecalho";
import Widget from "../../components/Widget";
import "./loginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioInvalido: false,
      msgErro: ""
    };
  }
  fazerLogin = e => {
    e.preventDefault();
    // console.log(this.inputLogin.value);
    // console.log(this.inputSenha.value);
    const dadosDeLogin = {
      login: this.inputLogin.value,
      senha: this.inputSenha.value
    };
    console.log(dadosDeLogin);
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(dadosDeLogin)
    })
      .then(resp => {
        if (!resp.ok) throw resp;
        // throw envia a resposta pro catch e pula o then
        // .json () pega só a resposta do back
        // tipo promisse: precisamos fazer outro then para capturar o valor
        return resp.json();
      })
      .then(respJson => {
        // peguei o retorno no back e consigo usar como variável
        // se a resposta for 200 ok
        // console.log("then ok", respJson);
        localStorage.setItem("TOKEN", respJson.token);
        // coloquei nome do login
        localStorage.setItem("NOMEDOLOGIN", dadosDeLogin.login);
        this.props.history.push("/");
      })
      .catch(err => {
        err.json().then(res => {
          console.log("catch", res);
          this.setState({
            // set state faz com que o render rode denovo e atualize nossa tela
            usuarioInvalido: true,
            msgErro: res.message
            // msgErro=res.message
          });
          // alert(res.message)
        });
        // this.props.history.push("#errozinho");
      });
  };
  render() {
    // let inputLogin = ""
    // let inputSenha = ""
    // this.fazerLogin.err.res = msgErro
    return (
      <Fragment>
        <Cabecalho />
        <div className="loginPage">
          <div className="container">
            <Widget>
              <h2 className="loginPage__title">Seja bem vindo!</h2>
              <form
                className="loginPage__form"
                action="/"
                onSubmit={this.fazerLogin}
              >
                <div className="loginPage__inputWrap">
                  <label className="loginPage__label" htmlFor="login">
                    Login
                  </label>
                  <input
                    ref={elementoInput => (this.inputLogin = elementoInput)}
                    className="loginPage__input"
                    type="text"
                    id="login"
                    name="login"
                  />
                </div>
                <div className="loginPage__inputWrap">
                  <label className="loginPage__label" htmlFor="senha">
                    Senha
                  </label>
                  <input
                    ref={elementoInput => (this.inputSenha = elementoInput)}
                    className="loginPage__input"
                    type="password"
                    id="senha"
                    name="senha"
                  />
                </div>
                {/* mensagem de erro! */}
                {this.state.usuarioInvalido ? (
                  <div className="loginPage__errorBox">
                    {this.state.msgErro}
                  </div>
                ) : (
                  ""
                )}
                <div className="loginPage__inputWrap">
                  <button className="loginPage__btnLogin" type="submit">
                    Logar
                  </button>
                </div>
              </form>
            </Widget>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoginPage;
