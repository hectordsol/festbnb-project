"use client";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { CancellationPolicy, CardInfo, FundamentalRules, Gpay, IconNote, PriceInfo, RequirementTrip, YourTrip, } from "./PaymentElements";
import PayForm from "./FormularioPago";

export default function Payment() {
	const [selectedItem, setSelectedItem] = React.useState('Tarjeta de crédito o débito');
	return (
		<div className="flex items-center justify-center mx-auto p-2 px-20 container">
			<div className="flex flex-col items-center w-full">
				<div className="w-full flex items-center justify-start pt-16 pb-4">
					<div className="w-14 left-0">
						<Link href="/" className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-slate-200">
							<FaAngleLeft text-size={30} color="#000" />
						</Link>
					</div>
					<div className="w-full flex items-center justify-center md:justify-start">
						<h2 className="text-center text-xl md:text-3xl font-bold">Solicita reservar</h2>
					</div>
				</div>
				<div className="flex space-x-20">
					<div className="w-1/2">
						<div>
							<YourTrip />
							<PayForm selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
							<RequirementTrip />
							<CancellationPolicy />
							<FundamentalRules />
							<div className="pt-8 pb-6 border-t flex items-start justify-between w-full">
								<div className="mr-6">
									<IconNote />
								</div>
								<div>
									<h4 className="text-lg font-bold leading-5">No confirmaremos tu reservación hasta que el anfitrión acepte la solicitud (en un plazo de 24 horas).</h4>
									<p>No te haremos ningún cargo hasta entonces.</p>
								</div>
							</div>
							<div className="pt-8 border-t flex items-start justify-between w-full">
								<p className="text-xs">
									Al seleccionar el botón que aparece a continuación, acepto las siguientes políticas:
									<a href="" className="underline font-semibold text-black mx-1"> Reglas del anfitrión de la casa, Reglas fundamentales para los huéspedes, Política de reembolso y asistencia para cambio de reservación de Festbnb.</a>
									Además, doy mi consentimiento para que Festbnb pueda
									<a href="" className="underline font-semibold text-black mx-1">cobrarme a través de mi método de pago</a>
									si soy responsable de los daños. Acepto pagar el monto total indicado si el anfitrión acepta mi solicitud de reservación.
								</p>
							</div>
							<div className="py-6 flex items-center">
								{selectedItem === 'Tarjeta de crédito o débito' ? (
									<button className="text-lg font-semibold py-3.5 px-9 rounded-lg text-white outline-none bg-gradient-to-r from-red-600 to-pink-600">
										Solicita reservar
									</button>
								): (
										<button className="text-lg font-semibold py-3 px-16 rounded-lg outline-none bg-black ">
											<div className="w-16">
												<Gpay color={'#ffffff'} />
											</div>
										</button>
								)}
							</div>
						</div>
					</div>
					<div className="w-1/2 flex items-start justify-center ">
						<div className="p-6 w-[463px] border rounded-lg sticky top-20">
							<CardInfo />
							<PriceInfo />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}