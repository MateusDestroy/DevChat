


import { Link } from 'react-router-dom'
import './styled.scss'

export default function Cabecalho (){
    return(
       <div className="chat-cabecalho">
       
         <div className="img-logo">  <img  src="assets/image/logo.svg" alt="" srcset= "" /></div>
         <div className="nome-logo-chat">Chat</div>
       

         <Link to= "/">   <div className='sair'> <img src="assets/image/sair.svg" alt=""/></div></Link>
       
       </div>
    )
}