import { AiOutlineClose } from 'react-icons/ai'

const AlertSalons = ({isHidden, setIsHidden, method, param}) => {
    console.log(param);
    return(
        <div className={`${isHidden ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0`}>
            <div className='fixed shadow-xl rounded-lg px-6 py-4 bg-slate-100 text-black flex flex-col gap-y-8'>
                <div className="relative flex items-center justify-center pb-4 border-b">
                    <button 
                    className='p-0 absolute left-0 top-1.5 text-start self-start'
                    onClick={() => setIsHidden(!isHidden)}>
                        <AiOutlineClose className='text-xl'/>
                    </button>
                    <span className='self-center font-semibold'>¿Querés eliminar esta foto?</span>
                </div>
                <p>Una vez que la elimines, no vas a poder recuperarla.</p>
                <div className='flex items-center justify-between pt-4 border-t'>
                    <button 
                    onClick={() => setIsHidden(!isHidden)}
                    className="font-semibold underline rounded-lg p-2 hover:bg-slate-100" >Cancelar</button>
                    <button
                        onClick={() => method(param)}
                        className={`bg-black/90 hover:bg-black px-4 py-2 rounded-xl text-white font-semibold` }
                        >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AlertSalons;
