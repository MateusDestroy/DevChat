

import { Link } from 'react-router-dom'
import './styled.scss'

export default function buttonslogin() {
    return(
        <div className="buttons-login">
         <Link to= "CriarConta">  
            <div className="cria">  Criar Conta </div> </Link>
          <Link to= "Chat"><div className='button'> <button type="entra">Entra</button> </div> </Link>
        </div>
    )
    
}