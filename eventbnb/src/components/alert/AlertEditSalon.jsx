import {AiOutlineCheckCircle} from 'react-icons/ai'
import {BiSolidErrorCircle} from 'react-icons/bi'

const AlertEditSalon = ({alertEditHidden, alertEditError}) => {
    return(
        <div className={`${alertEditHidden ? 'hidden' : 'flex'} absolute bottom-12 items-center px-4 py-2 bg-slate-100 rounded-lg gap-x-3`}>  
            {
                alertEditError ? 
                <BiSolidErrorCircle className='text-red-500 text-xl'></BiSolidErrorCircle> :
                <AiOutlineCheckCircle className='text-green-600 text-xl'></AiOutlineCheckCircle>
            }
            <span className='text-stone-700'>{alertEditError ? 'No se pudo actualizar el salón' : 'Salón actualizado'}</span>
        </div>
    )
}

export default AlertEditSalon;
