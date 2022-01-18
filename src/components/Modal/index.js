import React from 'react';
import "./style.css";

export default function Modal(props) {
 return (

   <div className='flip-card'>
       <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={props.img} />
          </div>

          <div className='flip-card-back'>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.text}<br/></p>
            
            <h3>Permissões: <br/></h3>
            
            <p>{props.permissions} <br/><br/></p>
            
            <h3>Compromissos com o usuario:</h3>
            <p>
                <br/>
                A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                <br/><br/>
                B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, casas de apostas online (ex.: ), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                <br/><br/>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do App Histórias para dormir, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados."
            </p>
          </div>

       </div>

   </div>

 );
}