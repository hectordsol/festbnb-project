'use client'

import { useEffect, useState } from "react";

import useUsers from '@/hooks/useUsers';
import { useRouter } from "next/navigation"
import AlertError from "@/components/alert/AlertError";
import Image from "next/image";
import axios from "axios";
import {GiSandsOfTime} from 'react-icons/gi'
import {AiOutlineCheck, AiOutlinePlus} from 'react-icons/ai'
import Link from "next/link";
import { services, columns, convertDate } from "./utils";
import EditSalon from "./EditSalon";

const MySalons = () => {
    
    const router = useRouter()
    const {validateSession, getUserData} = useUsers()

    const [dropdown, setDropdown] = useState(false)
    const [data, setData] = useState([])
    const [auxData, setAuxData] = useState([])
    const [lowToHigh, setLowToHigh] = useState(false)
    const [activeServices, setActiveServices] = useState(services)

    const [checkeds, setCheckeds] = useState({})

    const [isHidden, setIsHidden] = useState(true)
    const [formHidden, setFormHidden] = useState(true)
    const [userData, setUserData] = useState({})
    const [salonData, setSalonData] = useState({})

    useEffect(() => {
        const validate = async () => {
            try { 
                const isValidate = validateSession()
                setIsHidden(isValidate)
                const dataUser = await getUserData()
                console.log(dataUser)
                setUserData(dataUser)
                const { data } = await axios(`http://104.154.93.179:5000/usuarios/${dataUser._id}`)
                const checks = data.data.salones.reduce((acc, salon) => {
                    acc[salon.nombre] = false;
                    return acc;
                }, {})
                setCheckeds(checks)
                setData(data.data.salones)
                setAuxData(data.data.salones)
            } catch (error) {
                setIsHidden(false)
            }
        }
        validate()
    }, [])

    const handleClick = (route) => {
        setIsHidden(true)
        router.push(route)
    }

    const sorted = (attribute, order, type) => {

        switch (type) {
            case 'string':
                if(order){
                    let arrOrder = data.sort((a, b) => a[attribute].localeCompare(b[attribute]));
                    console.log(arrOrder)
                    setAuxData(arrOrder)
                    setLowToHigh(!lowToHigh)    
                    break;
                }
                let arrOrder = data.sort((a, b) => b[attribute].localeCompare(a[attribute]));
                console.log(arrOrder)
                setAuxData(arrOrder)
                setLowToHigh(!lowToHigh)
                break;

            case 'date':
                if(order){
                    let arrOrderDate = data.sort((a, b) => new Date(b[attribute]) - new Date(a[attribute]));
                    setAuxData(arrOrderDate)
                    setLowToHigh(!lowToHigh)
                    break;    
                }
                let arrOrderDate = data.sort((a, b) => new Date(a[attribute]) - new Date(b[attribute]));
                setAuxData(arrOrderDate)
                setLowToHigh(!lowToHigh)
                break;

            case 'number':
                if(order){
                    let arrOrderNumber = data.sort((a, b) => b[attribute] - a[attribute]);
                    setAuxData(arrOrderNumber)
                    setLowToHigh(!lowToHigh)
                    break;
                }

                let arrOrderNumber = data.sort((a, b) => a[attribute] - b[attribute]);
                console.log(arrOrderNumber)
                setAuxData(arrOrderNumber)
                setLowToHigh(!lowToHigh)
                break;
        
            default:
                setAuxData(data)
                break;
        }
    } 

    const handleSearchBar = (e) => {
        const arrData = data.filter(salon => {
            return salon.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setAuxData(arrData)
    }

    const handleActiveServices = (service) => {
        const servicesActive = activeServices.map(servic => {
            if(servic.state === service){
                return {...servic, isActive: !servic.isActive}
            }   
            return servic;
        })

        setActiveServices(servicesActive)
    }

    const handleServices = () => {
        const trueServices = activeServices.filter(service => service.isActive === true).map(service => service.state)
        if(!trueServices.length) return setAuxData(data)
        if(trueServices.length === services.length) return setAuxData(data)

        const salonsFilter = data.filter((salon) => {
            for (const service of trueServices) {
                return salon[service] === true
            }
        })
        
        setAuxData(salonsFilter)
    }

    const clearFilters = () => {
        return setAuxData(data)
    }

    const handleFormEdit = (hidden, id, attr) => {
        const aux = data.reduce((acc, salon) => {
            acc[salon.nombre] = false;
            return acc;
        }, {})

        setFormHidden(hidden)
        setCheckeds({...aux, [attr]: !checkeds[attr]}) 

        const dataSalon = data.filter(salon => salon._id === id)
        setSalonData(dataSalon[0])
    }
    
    return(
        <div className="w-3/4 mx-auto overflow-x-auto flex flex-col gap-y-6">
            <h3 className="text-2xl font-semibold">{auxData.length} ANUNCIOS</h3>
            <div className="flex items-center mb-4 justify-between pb-4 gap-x-4">
                <div className="flex items-center gap-x-3">
                    <label className="sr-only">Search</label>
                    <div className="relative hover:cursor-pointer">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input onChange={handleSearchBar} type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Busca tu salón"/>
                    </div>
                    <div>
                        <button id="dropdownRadioButton" onClick={() => setDropdown(!dropdown)} className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-3 py-2 focus:border-black focus:font-semibold" type="button">
                            Servicios
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownRadio" className={`z-10 ${dropdown ? 'absolute' : 'hidden'} w-96 bg-slate-100 divide-y divide-gray-100 rounded-lg shadow flex flex-col items-end p-2`}>
                            <ul className="p-3 flex flex-wrap w-full space-y-1 text-sm text-gray-700 ">
                                {
                                    activeServices.map((service) => {
                                        return (
                                            <li key={service.state}>
                                                <div className="flex items-center p-2 rounded">
                                                    <input 
                                                    onClick={() => handleActiveServices(service.state)}
                                                    id="filter-radio-example-1" type="checkbox" checked={service.isActive} name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                                                    <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded">{service.text}</label>
                                                </div>
                                            </li>         
                                        )
                                    })
                                }
                            </ul>
                            <button 
                            onClick={handleServices}
                            className="text-end bg-black/90 hover:bg-black px-4 py-2 rounded-md text-white font-semibold">
                                Aplicar
                            </button>
                        </div>
                    </div>
                    <button
                    onClick={clearFilters}
                    className="font-semibold underline hover:cursor-pointer text-gray-800">
                        Borrar filtros
                    </button>
                </div>
                <Link 
                className="px-4 py-2 flex items-center gap-x-2 border border-black rounded-xl hover:bg-black/5 font-semibold"
                href={`/become-a-host/${userData._id}/overview`}>
                    <AiOutlinePlus className="text-black text-xl"></AiOutlinePlus>
                    <span>Crear anuncio</span>
                </Link>
            </div>
            <table className="w-full text-sm text-left text-gray-500 overflow-x-auto">
                <thead className="text-xs text-gray-700 bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                <label className="sr-only">checkbox</label>
                            </div>
                        </th>
                        {
                            columns.map(column => <th key={column.state} scope="col" className="pl-6 pr-4 py-3">
                            <button 
                            onClick={() => sorted(column.state, lowToHigh, column.type)}
                            className={`${column.type === 'boolean' ? 'hover:cursor-default' : ''} cur flex items-center gap-x-1`}>
                                <span className="uppercase">{column.name}</span>
                                {
                                    column.state == 'borrado' ? '' : 
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                }
                            </button>
                        </th>)
                        }
                    </tr>
                </thead>
                <tbody className="overflow-x-auto">
                    {
                        auxData?.map((salon) => {
                            return <tr key={salon?._id} className="bg-white border-b">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input 
                                        checked={checkeds[salon.nombre]}
                                        onClick={() => handleFormEdit(false, salon?._id, salon.nombre)} 
                                        id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 hover:border-black hover:cursor-pointer"/>
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="pl-6 pr-4 font-semibold flex items-center gap-x-2 text-gray-900 whitespace-wrap">
                                    <Image width={200} height={200} src={'https://i.postimg.cc/HLrKkK46/download.jpg'} alt={salon?.nombre} className="w-12 h-10 sepia rounded-sm"></Image>
                                    <span>{salon?.nombre}</span>
                                </th>
                                <td className="px-6 pr-4">
                                { salon?.borrado ? 
                                    <div className="flex items-center gap-x-1">
                                        <AiOutlineCheck></AiOutlineCheck>
                                        <span>Aprobado</span>
                                    </div> : 
                                    <div className="flex items-center gap-x-1">
                                        <GiSandsOfTime></GiSandsOfTime>
                                        <span>En proceso</span>
                                    </div> 
                                }
                                </td>
                                <td className="px-6 pr-4">
                                    {convertDate(salon?.fechaCreacion)}
                                </td>
                                <td className="px-6 pr-4">
                                    {salon?.baño}
                                </td>
                                <td className="px-6 pr-4">
                                    {salon?.personal_seguridad}
                                </td>
                                <td className="px-6 pr-4">
                                    {salon?.capacidad_max}
                                </td>
                            </tr>
                        })  
                    }
                </tbody>
            </table>
            <AlertError method={handleClick} param={'/'} isHidden={isHidden} setIsHidden={setIsHidden} href={'/'}></AlertError>
            <EditSalon data={data} salonData={salonData} setSalonData={setSalonData}  setFormHidden={setFormHidden} setCheckeds={setCheckeds} formHidden={formHidden}></EditSalon>
        </div>
    )
}
export default MySalons;
