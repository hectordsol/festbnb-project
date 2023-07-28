import {AiOutlineCheckCircle, AiFillWarning} from 'react-icons/ai'
import {BiSolidErrorCircle} from 'react-icons/bi'

const AlertReservas = ({alertEditHidden, alertEditError}) => {
    return(
        <div className={`${alertEditHidden ? 'hidden' : 'flex'} absolute top-10 items-center px-4 py-2 bg-slate-100 rounded-lg gap-x-3`}>  
            {
                alertEditError === 'error' ? 
                <BiSolidErrorCircle className='text-red-500 text-xl'></BiSolidErrorCircle> : alertEditError === 'success' ? 
                <AiOutlineCheckCircle className='text-green-600 text-xl'></AiOutlineCheckCircle> :
                <AiFillWarning className='text-yellow-600 text-xl'></AiFillWarning>
            }
            <span className='text-stone-700'>{alertEditError === 'error' ? 'Lo siento, intenta nuevamente.' : alertEditError === 'success' ? 'Perfecto, ahora solo queda pagar.' : 'Primero consulta la fecha disponible.'}</span>
        </div>
    )
}

export default AlertReservas;
