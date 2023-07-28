import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai'

const AlertEdit = ({isHidden, setIsHidden, href}) => {
    return(
        <div className={`${isHidden ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 bg-slate-300`}>
            <div className='fixed shadow-xl rounded-lg px-6 py-4 bg-slate-100 text-black flex flex-col gap-y-8'>
                <div className="relative flex items-center justify-center pb-4 border-b">
                    <button 
                    className='p-0 absolute left-0 top-1.5 text-start self-start'
                    onClick={() => setIsHidden(true)}>
                        <AiOutlineClose className='text-xl'/>
                    </button>
                    <span className='self-center font-semibold'>¿Quieres editar este salón?</span>
                </div>
                <p className='text-2xl'>Se te redirigirá a una nueva pestaña.</p>
                <div className='flex items-center justify-end pt-4 border-t'>
                    <Link
                        href={href}
                        className={`bg-black/90 hover:bg-black px-4 py-2 rounded-xl text-white font-semibold` }
                        >
                        Editar salón
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AlertEdit;
