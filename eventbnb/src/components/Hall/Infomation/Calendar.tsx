'use client'
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BsClockHistory, BsCheckCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import {
    EventHallContext,
    IEventHallProvider,
  } from "@/context/EventHallProvider";

function formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [day, month, year].join('/');
}

function getStartAndEndOfDay(dateString) {
    const date = new Date(dateString);
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
  
    return { startOfDay, endOfDay };
}

const Calendar = ({id, clientId}) => {
    const { setDisabled, setReserva, setFormattedDateReservation } = useContext(EventHallContext) as IEventHallProvider;
    const [startDate, setStartDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState('');
    const [isReservate, setIsReservate] = useState('proceso')

    function isWeekday(date) {
        const today = new Date();
        return date >= today;
    }

    useEffect(() => {
        setFormattedDate(formatDate(startDate));
        setFormattedDateReservation(formatDate(startDate))
    }, [startDate]);

    const handleClick = async () => {
        const dates = getStartAndEndOfDay(startDate)
        const axiosData = {
            Fecha_inicio: dates['startOfDay'],
            Fecha_fin: dates['endOfDay'],
            cliente: clientId.id,
            salon: id
        }

        try {
            if(clientId.error) throw new Error('Por favor registrese o inicie sesion para realizar esta acción')

            const {data} = await axios.post('http://104.154.93.179:5000/eventos', axiosData) 
            
            if(data.error) throw new Error(data.data.message)
            
            setReserva(data.data._id)
            setDisabled(false)
            setIsReservate('desocupado')
        } catch (error) {
            setIsReservate('ocupado')
        }
    }

    return(
        <div className="flex flex-col gap-y-6 py-6 border-t">
            <div>
                <h3 className="text-2xl font-semibold">Seleccioná la fecha para alquilar tu salón</h3>
                <span className="text-stone-500 font-semibold">Agregá tu fecha de alquiler para saber si está disponible</span>
            </div>
            <div className="w-11/12 flex items-center justify-between">
                <div className="rounded-xl flex items-center justify-center px-20 py-4 bg-slate-100 ">
                    <DatePicker inline dateFormat="yyyy/MM/dd" selected={startDate} filterDate={isWeekday} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="flex flex-col gap-y-6 items-center justify-center">
                    <div className='flex items-center gap-x-4'>
                        <p className="text-xl font-semibold">{formattedDate}</p>
                        {
                            isReservate === 'proceso' ? <BsClockHistory className="font-semibold"></BsClockHistory> : isReservate === 'ocupado' ? <AiFillCloseCircle className="text-xl font-semibold text-red-500"></AiFillCloseCircle> : <BsCheckCircleFill className="text-green-500 font-semibold"></BsCheckCircleFill>
                        }
                    </div>
                    <button 
                    onClick={handleClick}
                    className="font-semibold text-center bg-black hover:bg-black/80 rounded-lg text-white px-4 py-2 hover:black/80">Consultar Disponibilidad</button>
                </div>
            </div>
        </div>
    )
}
export default Calendar;
