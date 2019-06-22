import React from 'react'

// Conteudo do botão
// props = {
//     desabilitado=Boolean
//     className = String
//     onclick  = Function
//     Children= Texto do botao
// }

export default function BotaoSubmit(props) {
    let classes = props.classeBotao
    if (props.desabilitado) {
        classes += ' botao--desabilitado'

    }
    return (
        <button className={props.classeBotao} onClick={props.acaoBotao}>
            {props.children}
        </button>
    )
}
