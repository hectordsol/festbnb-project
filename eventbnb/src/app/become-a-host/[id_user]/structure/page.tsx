'use client'
import useSalons from '@/hooks/useSalons';

import ButtonHalls from "@/components/create-halls/ButtonHalls";
import BackButton from "../../../../components/create-halls/backButton";

import { IconType } from "react-icons/lib"
import { FaUniversalAccess } from "react-icons/fa"
import { FaParking } from "react-icons/fa"
import { FaChair } from "react-icons/fa"
import { FaLightbulb } from "react-icons/fa"
import { FaCamera } from "react-icons/fa"
import { FaSwimmingPool } from "react-icons/fa"
import { FaWifi } from "react-icons/fa"

import { MdOutlineBathroom } from "react-icons/md"
import { MdOutlineRoomService } from "react-icons/md"
import { MdSpeaker } from "react-icons/md"
import { MdOutlineSoupKitchen } from "react-icons/md"
import { MdBroadcastOnHome } from "react-icons/md"

import { BsFlower1 } from "react-icons/bs"


interface Options {
    icon: IconType;
    text: string;
    state: string;
}

const services: Options[] = [
    {
        icon: MdOutlineBathroom,
        text: 'Baños Accesibles',
        state: 'baño_accesibilidad'
    },
    {
        icon: FaUniversalAccess,
        text: 'Accesibilidad',
        state: 'accesibilidad'
    },
    {
        icon: FaParking,
        text: 'Estacionamiento',
        state: 'estacionamiento'
    },
    {
        icon: MdOutlineRoomService,
        text: 'Catering',
        state: 'catering'
    },
    {
        icon: FaChair,
        text: 'Mesas y sillas',
        state: 'mesas_sillas'
    },
    {
        icon: FaLightbulb,
        text: 'Luces especiales',
        state: 'luces'
    },
    {
        icon: MdSpeaker,
        text: 'Sonido',
        state: 'sonido'
    },
    {
        icon: FaCamera,
        text: 'Fotografía',
        state: 'fotografia'
    },
    {
        icon: BsFlower1,
        text: 'Decoración',
        state: 'decoracion'
    },
    {
        icon: FaSwimmingPool,
        text: 'Pileta',
        state: 'pileta'
    },
    {
        icon: FaWifi,
        text: 'Zona WiFi',
        state: 'wifi'
    },
    {
        icon: MdOutlineSoupKitchen,
        text: 'Cocina',
        state: 'cocina'
    },
    {
        icon: MdBroadcastOnHome,
        text: 'Escenario',
        state: 'escenario'
    },
] 

const Page = () => {
    const {salon, setSalon} = useSalons<Salon>()
    
    const handleClick = (stateName) => {
        setSalon((prevState) => ({
          ...prevState,
          [stateName]: !prevState[stateName],
        }));
    };
      
    return(
        <div className="text-black bg-white flex flex-col items-center justify-center gap-y-16">
            <h3 className="text-4xl font-semibold mt-20">¿Con cuáles de estos servicios cuenta tu salón?</h3>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 flex items-center flex-wrap w-3/4 gap-4">
                {
                    services.map((option) => {
                        return(
                            <button key={option.state} onClick={() => handleClick(option.state)} className={`${salon[option.state] ? 'border-black ' : 'border-2'} flex flex-col gap-y-3 font-semibold border-2 rounded-lg px-6 py-8 hover:border-black hover:cursor-pointer w-64`}>
                                <option.icon className="text-4xl"></option.icon>
                                <span>{option.text}</span>
                            </button>
                        )
                    })
                }
            
            </div>
            <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
                <BackButton href="./about-your-place"></BackButton>
                <ButtonHalls href="./stand-out" content="Siguiente" backBtn={true}/>
            </div>
        </div>
    )
}

export default Page;
