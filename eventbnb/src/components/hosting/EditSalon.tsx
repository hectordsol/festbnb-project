'use client'

import { useState } from "react";
import axios from "axios";
import { AiOutlineClose, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai"
import { RiSubtractFill } from "react-icons/ri"

import { MdOutlineNavigateNext, MdWarningAmber, MdPinDrop, MdHomeRepairService, MdArrowBackIosNew } from "react-icons/md"
import {SiCodechef} from 'react-icons/si'
import Image from "next/image";
import ubication from '../../../public/images/googleMaps.jpeg'
import AlertEditSalon from "../alert/AlertEditSalon";
import { useRouter } from "next/navigation";

interface Options {
    text: string;
    state: string;
}

const especialsServices: Options[] = [
    {
        text: 'Aires acondicionados',
        state: 'aire_acondicionado'
    },
    {
        text: 'Parrillas',
        state: 'parrilla'
    },
    {
        text: 'Pantallas',
        state: 'pantalla'
    },
    {
        text: 'Personal de seguridad',
        state: 'personal_seguridad'
    },
    {
        text: 'Baños',
        state: 'baño'
    }
]

const services: Options[] = [
    {
        text: 'Baños Accesibles',
        state: 'baño_accesibilidad'
    },
    {
        text: 'Accesibilidad',
        state: 'accesibilidad'
    },
    {
        text: 'Estacionamiento',
        state: 'estacionamiento'
    },
    {
        text: 'Catering',
        state: 'catering'
    },
    {
        text: 'Mesas y sillas',
        state: 'mesas_sillas'
    },
    {
       
        text: 'Luces especiales',
        state: 'luces'
    },
    {
        text: 'Sonido',
        state: 'sonido'
    },
    {
        text: 'Fotografía',
        state: 'fotografia'
    },
    {
        text: 'Decoración',
        state: 'decoracion'
    },
    {
        text: 'Pileta',
        state: 'pileta'
    },
    {
        text: 'Zona WiFi',
        state: 'wifi'
    },
    {
        text: 'Cocina',
        state: 'cocina'
    },
    {
        text: 'Escenario',
        state: 'escenario'
    },
] 

const EditSalon = ({data, formHidden, salonData, setSalonData, setFormHidden, setCheckeds}) => {
    // Estados para ocultar cada sección de las opciones a editar 
    const [statesHidden, setStatesHidden] = useState({
        principalBody: true,
        servicesHidden: true,
        especialServicesHidden: true,
        delicatedInformationHidden: true,
        ubicationHidden: true
    })
    
    const [activeSection, setActiveSection] = useState('')
    const [alertEditHidden, setAlertEditHidden] = useState(true)
    const [alertEditError, setAlertEditError] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)

    const handleChange = (e) => {
        setSalonData({...salonData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        try {
            setBtnLoading(!btnLoading)
            const {data} = await axios.put('http://104.154.93.179:5000/salones/' + salonData._id, salonData)
            handleBackButton()
            setAlertEditHidden(!alertEditHidden)
            setSalonData(data.data)
        } catch (error) {
            setAlertEditError(!alertEditError)
            handleBackButton()
            setAlertEditHidden(!alertEditHidden)
        } finally{
            setBtnLoading(false)
            setTimeout(() => {
                setAlertEditHidden(true)
            }, 3000);
        }
    }

    // Manejo la logica de secciones
    const handleServices = (attr) => {
        setStatesHidden((prevState) => {
            return {
                ...prevState,
                [attr]: !statesHidden[attr],
                principalBody: !statesHidden.principalBody
            }
        })
        setActiveSection(attr)
    }

    const handleCloseButton = () => {
        const aux = data.reduce((acc, salon) => {
            acc[salon.nombre] = false;
            return acc;
        }, {})
        setFormHidden(!formHidden)
        setCheckeds({...aux})
    }

    const handleBackButton = () => {
        setStatesHidden((prevState) => {
            return {
                ...prevState,
                principalBody: !statesHidden.principalBody,
                [activeSection]: !statesHidden[activeSection]
            }
        })
    }

    // manejo de la logica de servicios - atributos booleanos
    const handleActiveServices = (attr) => {
        setSalonData((prevState) => {
            return {
                ...prevState,
                [attr]: !salonData[attr]
            }
        })
    }

    // manejo de la logica de servicios especiales - atributos tipo number
    const handleActiveEspecialsServices = (attr, operation) => {
        const oper = operation === 'add' ? 1 : -1
        setSalonData((prevState) => {
            return {
                ...prevState,
                [attr]: salonData[attr] + oper
            }
        })
    }
    
    return (
        <div className={`${formHidden ? 'hidden' : 'block'} absolute right-0 top-0 h-full flex flex-col items-center`}>
            <div className="relative z-10 flex flex-col items-center justify-between h-full w-[24rem] border-l">
                {/* HEADER */}
                <div className={`${statesHidden.principalBody ? 'flex' : 'hidden'} w-full sticky top-0 left-0 border-b py-4 items-center gap-x-4 justify-between px-4`}>
                    <h3 className="text-xl">Edita a {salonData.nombre}</h3>
                    <button className="p-2 rounded-lg hover:bg-slate-100" onClick={handleCloseButton}>
                        <AiOutlineClose className="text-xl font-semibold"></AiOutlineClose>
                    </button>
                </div>
                {/* HEADER QUE SE REPITE EN TODAS LAS OPCIONES DE SECCIONES */}
                <div className={`${statesHidden.principalBody ? 'hidden' : 'flex'} px-4 w-full sticky top-0 left-0 border-b py-4 flex items-center gap-x-8`}>
                    <button className="rounded-full p-2 hover:bg-slate-100" onClick={() => handleBackButton()}>
                        <MdArrowBackIosNew></MdArrowBackIosNew>
                    </button>
                    <h3 className="font-semibold text-2xl">{!statesHidden.servicesHidden ? 'Servicios' : !statesHidden.especialServicesHidden ? 'Servicios especiales' : !statesHidden.delicatedInformationHidden ? 'Información personal' : !statesHidden.ubicationHidden ? 'Ubicación' : ''}</h3>
                </div>
                {/* BODY */}
                <div className={`${statesHidden.principalBody ? 'flex' : 'hidden'} w-full h-full px-4 py-4 bg-white flex flex-col items-start gap-y-3`}>
                    <h3 className="text-stone-600 font-semibold">Información del salón</h3>
                    <button 
                    onClick={() => handleServices('servicesHidden')}
                    className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdHomeRepairService className="text-2xl"></MdHomeRepairService>
                            <span className="text-xl">Servicios</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button 
                    onClick={() => handleServices('especialServicesHidden')}
                    className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <SiCodechef className="text-2xl"></SiCodechef>
                            <span className="text-xl">Servicios especiales</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button 
                    onClick={() => handleServices('ubicationHidden')}
                    className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdPinDrop className="text-2xl"></MdPinDrop>
                            <span className="text-xl">Ubicación</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button 
                    onClick={() => handleServices('delicatedInformationHidden')}
                    className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdWarningAmber className="text-2xl"></MdWarningAmber>
                            <span className="text-xl">Información delicada</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                </div>
                {/* SERVICES */}
                <div className={`${statesHidden.servicesHidden ? 'hidden' : 'flex'} flex-col w-full h-full gap-y-2 bg-white px-4 pt-6 overflow-y-auto`}>
                    <h3 className="pb-3 px-2 text-stone-500  font-semibold">Editá los servicios de tu salón</h3>
                    {
                        services.map((service) => {
                            return(
                                <div key={service.state} className="border-b py-3 px-2 flex items-center justify-between">
                                    <span>{service.text}</span>
                                    <div className="flex items-center gap-x-2">
                                        <button 
                                        onClick={() => handleActiveServices(service.state)}
                                        className={`${!salonData[service.state] ? 'bg-black text-white' : 'hover:text-black hover:border-black'} rounded-full p-2 border text-stone-500 `}>
                                            <AiOutlineClose></AiOutlineClose>
                                        </button>
                                        <button 
                                        onClick={() => handleActiveServices(service.state)}
                                        className={`${salonData[service.state] ? 'bg-black text-white' : 'hover:text-black hover:border-black'} rounded-full p-2 border text-stone-500 `}>
                                            <AiOutlineCheck></AiOutlineCheck>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* UBICACIÓN */}
                <div className={`${statesHidden.ubicationHidden ? 'hidden' : 'flex'} flex-col items-start justify-center w-full h-full gap-y-4 bg-white px-4 py-6 overflow-y-auto`}>
                    <h3 className="text-stone-500 font-semibold pt-12">Edita la ubicación de tu salón</h3>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Ubicación:</label>
                        <input type="text" value={salonData.ubicacion} name="ubicacion" onChange={handleChange} className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Localidad:</label>
                        <input type="text" value={salonData.localidad} name="localidad" onChange={handleChange} className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Domicilio:</label>
                        <input type="text" value={salonData.domicilio} name="domicilio" onChange={handleChange} className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                    <Image src={ubication} width={450} height={450} alt="googleMaps" className="rounded-xl w-full h-fit"></Image>
                </div>
                {/* INFORMACIÓN DELICADA */}
                <div className={`${statesHidden.delicatedInformationHidden ? 'hidden' : 'flex'} flex-col items-start justify-start w-full h-full gap-y-6 bg-white px-4 py-6 overflow-y-auto`}>
                    <h3 className="text-stone-500 font-semibold">Edita la información personal de tu salón</h3>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Nombre:</label>
                        <input onChange={handleChange} type="text" value={salonData.nombre} name="nombre" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Telefóno:</label>
                        <input onChange={handleChange} type="tel" value={salonData.telefono} name="telefono" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                    <div className="flex flex-col text-sm gap-y-2 text-stone-700 w-full">
                        <label >Descripción:</label>
                        <input onChange={handleChange} type="text" value={salonData.descripcion} name="descripcion" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                    </div>
                </div>
                {/* SERVICIOS ESPECIALES */}
                <div className={`${statesHidden.especialServicesHidden ? 'hidden' : 'flex'} flex-col items-start justify-start w-full h-full gap-y-6 bg-white px-4 py-6 overflow-y-auto`}>
                    <h3 className="text-stone-500 font-semibold">Edita los servicios especiales de tu salón</h3>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <div className="flex flex-col text-sm gap-y-2 text-stone-700">
                            <label >Precio:</label>
                            <input onChange={handleChange} type="number" value={salonData.precio} name="precio" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                        </div>
                        <div className="flex flex-col text-sm gap-y-2 text-stone-700">
                            <label >Capacidad máxima:</label>
                            <input onChange={handleChange} type="number" value={salonData.capacidad_max} name="capacidad_max" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                        </div>
                        <div className="flex flex-col text-sm gap-y-2 text-stone-700">
                            <label >Superficie:</label>
                            <input onChange={handleChange} type="number" value={salonData.superficie} name="superficie" className="rounded-md w-full py-2 px-4 border -mt-2 text-stone-500"/>
                        </div>
                    </div>
                    <div className="w-full flex items-center flex-wrap justify-between gap-y-4">
                        {
                            especialsServices.map(service => {
                                return(
                                        <div key={service.state} className="flex flex-col items-start w-[45%]">
                                            <h3 className="text-sm text-stone-700">{service.text}</h3>
                                            <div className="flex gap-x-4 items-center">
                                                <button 
                                                onClick={() => handleActiveEspecialsServices(service.state, 'substract')}
                                                className="p-2 border hover:border-black hover:font-semibold rounded-full"><RiSubtractFill></RiSubtractFill></button>
                                                <span>{salonData[service.state]}</span>
                                                <button 
                                                onClick={() => handleActiveEspecialsServices(service.state, 'add')}
                                                className="p-2 border hover:border-black hover:font-semibold rounded-full"><AiOutlinePlus></AiOutlinePlus></button>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* FOOTER */}
                <div className={`${statesHidden.principalBody ? 'flex' : 'hidden'} w-full sticky top-0 left-0 border-t px-4 py-4 items-center`}>
                    <button 
                    onClick={handleCloseButton}
                    className="bg-black/90 hover:bg-black py-2 text-center w-full rounded-md text-white font-semibold">
                        Listo
                    </button>
                </div>
                {/* FOOTER QUE SE REPITE EN TODAS LAS OPCIONES DE SECCIONES */}
                <div className={`${statesHidden.principalBody ? 'hidden' : 'flex'} w-full sticky top-0 left-0 border-t py-4 px-4 flex items-center justify-between`}>
                    <button 
                    onClick={() => handleBackButton()}
                    className="underline font-semibold">
                        Atrás
                    </button>
                    <button 
                    onClick={() => handleSubmit()}
                    className={`bg-black/90 hover:bg-black px-4 py-2 rounded-md text-white font-semibold`}>
                        {
                            btnLoading ?
                            'Cargando...' :
                            'Guardar'
                        }
                    </button>
                </div>
                <AlertEditSalon alertEditHidden={alertEditHidden} alertEditError={alertEditError}></AlertEditSalon>
            </div>
        </div>
    )
}
export default EditSalon;
