import React from 'react'
import './cadastro.css'
import Inicial from './cadastro/Inicial'
import PessoaFisica from './cadastro/PessoaFisica'
import PessoaJuridica from './cadastro/PessoaJuridica'



class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    render() {
        return (
            <div className="cadastro">
                {
                    this.state.conteudo === undefined && <Inicial />
                }
                <Inicial/>
            
            </div>
        )
    }
}

export default Cadastro