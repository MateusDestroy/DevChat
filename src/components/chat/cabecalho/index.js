import './styled.scss'

export default function Cabecalho (){
    return(
       <div className="chat-cabecalho">
       
         <div className="img-logo">  <img  src="assets/image/logo.svg" alt="" srcset= "" /></div>
         <div className="nome-logo-chat">Chat</div>
       

         <div className='sair'> <img src="assets/image/sair.svg" alt=""/></div>
       
       </div>
    )
}