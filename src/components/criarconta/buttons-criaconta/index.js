
import { Link } from 'react-router-dom'
import './styled.scss'

export default function buttonscriaconta() {
    return (
        <div className="buttons-login">
       
          <div className='button'> <button type="criar">Criar Conta</button> </div> 
         <Link to= "/"> <div className="retornar">  Retornar a tela de login </div></Link>
       </div>
    )
    
}