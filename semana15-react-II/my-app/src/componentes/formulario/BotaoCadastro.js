import React from 'react'

// props = {
//     srcImagem={ Astronauta },
//                     AltImagem="icone astrounauta",
//                     titulo="Pessoa Fisica",
//                     valorImagem="PF",
//                     acaoBotao={props.alteraConteudo},
// }

export default function BotaoCadastro(props) {
    return (
        <button className="botao-icone" onClick={()=> 
        props.acaoBotao(props.valorImagem)}>
            <img src={props.srcImagem} 
            className="botao-imagem" alt={props.AltImagem} />
            <span>{props.titulo}</span>
        </button>
    )
}