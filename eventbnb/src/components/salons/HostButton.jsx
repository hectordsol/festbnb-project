import Link from 'next/link'

const HostButton = () => {
    return(
        <Link 
        href='/hosting'
        className="font-semibold px-4 py-2 rounded-2xl hover:bg-black/5 hover:cursor-pointer">
            Modo anfitrión
        </Link>
    )
}

export default HostButton;
