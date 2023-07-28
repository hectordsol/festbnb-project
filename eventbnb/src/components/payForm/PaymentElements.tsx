import Image from "next/image";
import React from "react";
import { FaMedal, FaStar, FaFacebookF, FaAngleDown, FaXmark, FaMinus, FaPlus } from "react-icons/fa6";
import { PiWarningCircleFill } from "react-icons/pi";
import { BiSolidCloudUpload } from "react-icons/bi"

export function CardInfo() {
	return (
		<div className="w-full flex items-center justify-center pb-6 border-b">
			<Image width={128} height={112} className="w-32 h-28 rounded-lg" src="https://a0.muscache.com/im/pictures/c1ea60ef-ec71-4158-a336-8f0aaf77af96.jpg?aki_policy=large" alt="" />

			<div className="pl-3 h-28 grid content-between">
				<div className="">
					<div>
						<p className="text-xs">Alojamiento Entero</p>
						<h5 className="text-sm">4 CUARTOS VILLA FRENTE A LA PLAYA - OPALO caserio de mar</h5>
					</div>
				</div>
				<div className="inline-flex items-center space-x-2">
					<p className="inline-flex items-center text-xs space-x-1">
						<FaStar />
						<span>5.00</span>
						<span>(1 <span>Reseña</span>)</span>
					</p>
					<span className="text-lg font-semibold">.</span>
					<p className="inline-flex items-center text-xs space-x-1">
						<FaMedal />
						<span>Superanfitrion</span>
					</p>
				</div>
			</div>
		</div>

	);
}

export function PriceInfo() {
	return (
		<div>
			<h2 className="py-6 text-2xl font-semibold">Información del precio</h2>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<p>S/1,381.56 x 5 noches</p>
					<span>S/6,907.8</span>
				</div>
				<div className="flex items-center justify-between">
					<p>Descuento por estadía semanal</p>
					<span className="text-green-600">-S/2,901.36</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline cursor-pointer">Tarifa de limpieza</p>
					<span>S/327.21</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline cursor-pointer">Tarifa por servicio de Festbnb</p>
					<span>S/1,021.41</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="underline cursor-pointer">Impuestos</p>
					<span>S/723.50</span>
				</div>
				<hr className="border-gray-200" />
				<div className="flex items-center justify-between">
					<p className="font-semibold text-lg">Total (<span className="underline cursor-pointer">PEN</span>)</p>
					<span className="font-semibold text-lg">S/8,979.92</span>
				</div>
			</div>

		</div>
	);
}

export function YourTrip() {
	const [hostModal, setHostModal] = React.useState(false);
	function openHostModal() {
		setHostModal(true)
	}
	function closeHostModal() {
		setHostModal(false)
	}

	return (
		<>
			<div className="w-[560px]">
				<h2 className="text-2xl font-semibold pb-6">Tu Viaje</h2>
				<div className="pb-6">
					<div className="flex items-center justify-between">
						<p className="text-lg font-semibold">Fechas</p>
						<button className="text-lg font-semibold underline">Edita</button>
					</div>
					<span className="mt-2">21 - 26 de Jul</span>
				</div>
				<div className="pb-6">
					<div className="flex items-center justify-between">
						<p className="text-lg font-semibold">Huespedes</p>
						<button onClick={openHostModal} className="text-lg font-semibold underline">Edita</button>
					</div>
					<span className="mt-2">1 Huesped</span>
				</div>
			</div>
			{
				hostModal && (
					<ModalHostCounter onclick={closeHostModal} />
				)
			}
		</>
	);
}

export function RequirementTrip() {
	const [messageModal, setMessageModal] = React.useState(false)
	const [profileModal, setProfileModal] = React.useState(false)
	const [numberPhoneModal, setNumberPhoneModal] = React.useState(false)

	function openMessageModal() {
		setMessageModal(true)
	}
	function closeMessageModal() {
		setMessageModal(false)
	}
	function openProfileModal() {
		setProfileModal(true)
	}
	function closeProfileModal() {
		setProfileModal(false)
	}
	function openNumberPhoneModal() {
		setNumberPhoneModal(true)
	}
	function closeNumberPhoneModal() {
		setNumberPhoneModal(false)
	}
	return (
		<>
			<div>
				<h2 className="text-xl font-semibold pt-8 pb-6 border-t">Requerido para tu viaje</h2>
				<div className="flex items-start justify-between pb-6">
					<div>
						<h3 className="text-xl font-semibold">Mensaje al anfitrion</h3>
						<p className="text-sm mt-1">Cuéntale al anfitrión por qué viajas y cuándo llegas.</p>
					</div>
					<button onClick={openMessageModal} className="px-4 py-1.5 border border-black rounded-lg hover:bg-gray-100">Agrega</button>
				</div>
				<div className="flex items-start justify-between pb-6">
					<div>
						<h3 className="text-xl font-semibold">Foto de perfil</h3>
						<p className="text-sm mt-1">Los anfitriones quieren saber quién se aloja en el alojamiento.</p>
					</div>
					<button onClick={openProfileModal} className="px-4 py-1.5 border border-black rounded-lg hover:bg-gray-100">Agrega</button>
				</div>
				<div className="flex items-start justify-between">
					<div>
						<h3 className="text-xl font-semibold">Número de teléfono</h3>
						<p className="text-sm mt-1">Agrega y confirma tu número de teléfono para recibir actualizaciones del viaje.</p>
					</div>
					<button onClick={openNumberPhoneModal} className="px-4 py-1.5 border border-black rounded-lg hover:bg-gray-100">Agrega</button>
				</div>
				<div className="text-red-600 flex items-center mt-2  pb-6 space-x-1">
					<PiWarningCircleFill />
					<span>Esto es obligatorio</span>
				</div>
			</div>

			{messageModal && (
				<ModalHostMessage onclick={closeMessageModal} />
			)}
			{profileModal && (
				<ModalProfileImage onclick={closeProfileModal} />
			)}
			{numberPhoneModal && (
				<ModalNumberPhone onclick={closeNumberPhoneModal} />
			)}
		</>
	);
}

export function CancellationPolicy() {
	return (
		<div className="pt-8 pb-6 border-t space-y-6">
			<h2 className="text-xl font-semibold">Política de cancelación</h2>
			<p className="text-base">Esta reservación no es reembolsable.
				<a href="" className="ml-1 font-semibold underline">Más información</a>
			</p>
		</div>
	);
}

export function FundamentalRules() {
	return (
		<div className="pt-8 pb-6 border-t">
			<h2 className="text-xl mb-6 font-semibold">Reglas fundamentales</h2>
			<p className="text-base">Pedimos a todos los huéspedes que recuerden algunas cosas sencillas sobre lo que hace que un huésped sea excelente.
			</p>
			<ul className="mt-4">
				<li>Sigue las reglas de la casa</li>
				<li>Trata el alojamiento del anfitrión como si fuera tuyo</li>
			</ul>
		</div>
	);
}

// Modals

export function ModalHostCounter({ onclick }) {
	const [adultCounter, setAdultCounter] = React.useState(0);
	const [childCounter, setChildCounter] = React.useState(0);
	const [babyCounter, setBabyCounter] = React.useState(0)
	const [petCounter, setPetCounter] = React.useState(0)

	const handleAdultIncrement = () => {
		if (adultCounter + childCounter < 7) {
			setAdultCounter(adultCounter + 1);
		}
	};

	const handleAdultDecrement = () => {
		if (adultCounter > 0) {
			setAdultCounter(adultCounter - 1);
		}
	};

	const handleChildIncrement = () => {
		if (adultCounter + childCounter < 7) {
			setChildCounter(childCounter + 1);
		}
	};

	const handleChildDecrement = () => {
		if (childCounter > 0) {
			setChildCounter(childCounter - 1);
		}
	};

	const handleBabyIncrement = () => {
		if (babyCounter < 5) {
			setBabyCounter(babyCounter + 1);
		}
	};

	const handleBabyDecrement = () => {
		if (babyCounter > 0) {
			setBabyCounter(babyCounter - 1);
		}
	};

	const handlePetIncrement = () => {
		if (petCounter < 5) {
			setPetCounter(petCounter + 1);
		}
	};

	const handlePetDecrement = () => {
		if (petCounter > 0) {
			setPetCounter(petCounter - 1);
		}
	};


	return (
		<>
			<div className="fixed top-0 left-0 flex items-center justify-center z-50 w-full h-full p-4">
				<div className="relative w-full max-w-sm max-h-full">

					<div className="relative bg-white rounded-lg shadow">

						<div className="flex items-start py-4 px-6">
							<button onClick={onclick} type="button" className="rounded-full w-8 h-8 p-1 right-0 flex justify-center items-center hover:bg-slate-200">
								<FaXmark className="text-lg" />
								<span className="sr-only">Cerrar modal</span>
							</button>
						</div>

						<div className="px-6">
							<h3 className="w-full text-2xl font-semibold">
								Huéspedes
							</h3>
						</div>
						<div className="p-6 space-y-6">
							<div>
								<p className="text-xs mb-2">Este alojamiento tiene una capacidad máxima de 7 huéspedes, sin incluir bebés. Si vienes con más de 2 mascotas, avísale al anfitrión.</p>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-xl font-semibold">Adultos</h4>
									<p className="pt-1 text-sm">Edad: 13 o más</p>
								</div>
								<div className="flex items-center space-x-2">
									<button onClick={handleAdultDecrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaMinus />
									</button>
									<span>{adultCounter}</span>
									<button onClick={handleAdultIncrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaPlus />
									</button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-xl font-semibold">Niños</h4>
									<p className="pt-1 text-sm">De 2 a 12 años</p>
								</div>
								<div className="flex items-center space-x-2">
									<button onClick={handleChildDecrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaMinus />
									</button>
									<span>{childCounter}</span>
									<button onClick={handleChildIncrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaPlus />
									</button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-xl font-semibold">Bebés</h4>
									<p className="pt-1 text-sm">Menos de 2 años</p>
								</div>
								<div className="flex items-center space-x-2">
									<button onClick={handleBabyDecrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaMinus />
									</button>
									<span>{babyCounter}</span>
									<button onClick={handleBabyIncrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaPlus />
									</button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<h4 className="text-xl font-semibold">Mascotas</h4>
									<p className="pt-1 text-sm">¿Traes a un animal de servicio?</p>
								</div>
								<div className="flex items-center space-x-2">
									<button onClick={handlePetDecrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaMinus />
									</button>
									<span>{petCounter}</span>
									<button onClick={handlePetIncrement} className="flex items-center justify-center text-xs p-1 w-8 h-8 rounded-full border border-zinc-600">
										<FaPlus />
									</button>
								</div>
							</div>

						</div>
						<div className="flex items-center justify-between py-4 px-6 border-t border-neutral-200 rounded-b">
							<button
								type="button"
								onClick={onclick}
								className="text-zinc-800 hover:text-zinc-950 text-base font-semibold rounded-lg py-3 px-6 underline active:text-zinc-500 ease-in-out duration-300"
							>
								Cancela
							</button>
							<button
								type="button"
								className="bg-zinc-800 hover:bg-zinc-950 text-white text-base font-semibold rounded-lg py-3 px-6 active:scale-95 ease-in-out duration-300"
							>
								Guardar
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50"></div>
		</>
	);
}

export function ModalHostMessage({ onclick }) {
	const [emptyText, setEmptyText] = React.useState('')

	function handleEmptyChange(event) {
		setEmptyText(event.target.value)
	}
	return (
		<>
			<div className="fixed top-0 left-0 flex items-center justify-center z-50 w-full h-full p-4">
				<div className="relative w-full max-w-xl max-h-full">

					<div className="relative bg-white rounded-lg shadow">

						<div className="flex items-start py-4 px-6 border-b rounded-t border-neutral-200">

							<button onClick={onclick} type="button" className="rounded-full w-8 h-8 p-1 right-0 flex justify-center items-center hover:bg-slate-200">
								<FaXmark className="text-lg" />
								<span className="sr-only">Cerrar modal</span>
							</button>

							<h3 className="w-full text-lg text-center font-semibold">
								Mensaje al anfitrión
							</h3>
						</div>

						<div className="p-6">
							<div>
								<h3 className="pt-4 text-xl font-semibold">Mensaje al anfitrión</h3>
								<p className="mt-1 text-sm">Cuéntale al anfitrión por qué viajas y cuándo llegas.</p>
							</div>
							<div className="flex items-center mt-4 pt-4 pb-8">
								<Image
									className="rounded-full w-11 h-11 object-cover"
									src="https://a0.muscache.com/im/pictures/user/8170b473-10f6-46dd-bfd6-cf4ffaadbd3f.jpg?aki_policy=profile_x_medium"
									alt=""
									width={44}
									height={44}
								/>
								<div className="pl-4">
									<p className="text-lg font-semibold">Mathilde</p>
									<p className="text-sm">Se unió a Airbnb en el 2014</p>
								</div>
							</div>
							<div>
								<textarea name="" id="" cols={30} rows={5}
									value={emptyText}
									onChange={handleEmptyChange}
									className="w-full p-2 border rounded-lg text-base leading-5"></textarea>
							</div>
						</div>
						<div className="flex items-center py-4 px-6 border-t border-neutral-200 rounded-b">
							<button
								type="button"
								className={`w-full bg-zinc-950 text-white text-base font-semibold rounded-lg py-3 px-6 active:scale-95 ease-in-out duration-300 ${emptyText.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
									}`}
								disabled={emptyText.trim() === ''}
							>
								Guardar
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50"></div>
		</>
	);
}

export function ModalProfileImage({ onclick }) {

	const [isFileUploaded, setIsFileUploaded] = React.useState(false);
	const [selectedFile, setSelectedFile] = React.useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(URL.createObjectURL(file));
		setIsFileUploaded(true);
	};

	const handleReset = () => {
		setIsFileUploaded(false);
		setSelectedFile(null);
	};

	return (
		<>
			<div className="fixed top-0 left-0 flex items-center justify-center z-50 w-full h-full p-4">
				<div className="relative w-full max-w-xl max-h-full">

					<div className="relative bg-white rounded-lg shadow">

						<div className="flex items-start py-4 px-6 border-b rounded-t border-neutral-200">

							<button onClick={onclick} type="button" className="rounded-full w-8 h-8 p-1 right-0 flex justify-center items-center hover:bg-slate-200">
								<FaXmark className="text-lg" />
								<span className="sr-only">Cerrar modal</span>
							</button>

							<h3 className="w-full text-lg text-center font-semibold">
								Agrega tu foto de perfil
							</h3>
						</div>

						<div className="p-6">
							<div className="flex items-center justify-center">
								<Image
									className="rounded-full w-32 h-32 object-cover"
									src={selectedFile ? selectedFile : 'https://a0.muscache.com/airbnb/static/packages/assets/frontend/account-activation-shared/images/dls19_user_pic.73f51bce14da5e9d49c22a8bc31a7d13.png'}
									alt=""
									width={128}
									height={128}
								/>
							</div>
							<div className="my-8">
								<p>Elige una imagen en la que se te vea la cara. Los huéspedes podrán ver tu foto de perfil solo cuando la reservación esté confirmada.</p>
							</div>
							<div className="mb-4">

								{isFileUploaded ? (
									<div className="space-y-3">
										<button type="button" className="w-full bg-zinc-800 text-white text-base font-semibold rounded-lg py-3 px-6 hover:bg-zinc-950 active:scale-95 ease-in-out duration-300">
											Sí, se ve bien
										</button>

										<button type="button" onClick={() => setIsFileUploaded(false)} className="w-full bg-white text-zinc-950 text-base font-semibold rounded-lg border border-zinc-950 py-3 px-6 hover:bg-slate-200 active:scale-95 ease-in-out duration-300">
											Toma una foto nueva
										</button>
									</div>
								) : (
									<div className="space-y-3">
										<button
											type="button"
											className="w-full bg-[#3b5998] opacity-50 text-white text-base font-semibold rounded-lg py-3 px-6 active:scale-95 ease-in-out duration-300"
										>
											<span className="flex items-center justify-center space-x-1">
												<FaFacebookF />
												Usa la Foto de Facebook
											</span>
										</button>
										<div className="w-full bg-white text-zinc-950 text-base font-semibold rounded-lg border border-zinc-950 py-3 px-6 hover:bg-slate-200 active:scale-95 ease-in-out duration-300">
											<label htmlFor="InputImage" >
												<span className="flex items-center justify-center">
													<BiSolidCloudUpload className="mr-1" />
													Subir una foto
												</span>
											</label>
											<input type="file" name="" id="InputImage"
												onChange={handleFileChange} className="sr-only" />
										</div>
									</div>
								)}

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50"></div>
		</>
	);
}

export function ModalNumberPhone({ onclick }) {
	const [emptyProfile, setEmptyProfile] = React.useState('')

	function handleEmptyChange(event) {
		setEmptyProfile(event.target.value)
	}
	return (
		<>
			<div className="fixed top-0 left-0 flex items-center justify-center z-50 w-full h-full p-4">
				<div className="relative w-full max-w-xl max-h-full">

					<div className="relative bg-white rounded-lg shadow">

						<div className="flex items-start py-4 px-6 border-b rounded-t border-neutral-200">

							<button onClick={onclick} type="button" className="rounded-full w-8 h-8 p-1 right-0 flex justify-center items-center hover:bg-slate-200">
								<FaXmark className="text-lg" />
								<span className="sr-only">Cerrar modal</span>
							</button>

							<h3 className="w-full text-lg text-center font-semibold">
								Agregar número de teléfono
							</h3>
						</div>

						<div className="p-6">
							<div className="p-6">
								<p>Te enviaremos actualizaciones del viaje y un texto para verificar este número.</p>

								<div className="my-6">
									<div className="mb-2 border rounded-lg">
										<div className="w-full flex items-center justify-between cursor-pointer">
											<div className="relative w-full">
												<p className="block p-4 pr-0 w-full appearance-none peer">Aquí va el código de país</p>
												<label htmlFor="card_City" className="absolute text-lg text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
													País o region
												</label>
											</div>
											<span className="w-6 mr-4 text-neutral-600">
												<FaAngleDown size={24} />
											</span>
										</div>
										<hr />
										<div className="relative">
											<input type="text" id="cardNumber" className="block p-4 w-full appearance-none peer" placeholder=" " />
											<label htmlFor="cardNumber" className="absolute text-lg text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
												<div className="flex items-center justify-center space-x-1">
													<span>Número de teléfono</span>
												</div>
											</label>
										</div>
									</div>
									<p>Te enviaremos un código por SMS para confirmar tu número. Sujeto a las tarifas estándar para mensajes y datos.</p>
								</div>
								<button
									type="button"
									className="bg-zinc-800 hover:bg-zinc-950 text-white text-base font-semibold rounded-lg py-3 px-6 active:scale-95 ease-in-out duration-300"
								>
									Continua
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50"></div>
		</>
	);
}




export function IconNote() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="#E31C5F"
			stroke="currentcolor"
			display="block"
			viewBox="0 0 48 48"
			style={{ height: 32, width: 32 }}
		>
			<g stroke="none">
				<path
					fillOpacity="0.2"
					d="M43 8v21.295L32.295 40l-10.359.001A11.971 11.971 0 0026 31c0-6.627-5.373-12-12-12a12.02 12.02 0 00-3.001.378L11 8h32z"
				></path>
				<path d="M32 42v-8a5 5 0 014.783-4.995L37 29h8V6H34v2h-2V6H22v2h-2V6H9v14.5H7V6a2 2 0 011.85-1.995L9 4h11V2h2v2h10V2h2v2h11a2 2 0 011.995 1.85L47 6v24.953L33.953 44H15v-2h17zm12.123-11H37a3 3 0 00-2.995 2.824L34 34v7.122L44.123 31z"></path>
			</g>
			<g fill="none" strokeWidth="2">
				<path d="M14 43c.328 0 .653-.013.974-.039C21.146 42.465 26 37.299 26 31c0-6.627-5.373-12-12-12A11.995 11.995 0 002 31c0 6.627 5.373 12 12 12z"></path>
				<path d="M23 31h-9v-9"></path>
			</g>
		</svg>
	);
}

// Payment Logos
export function Visa() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 9">
			<path
				fill="#122D98"
				fillRule="evenodd"
				d="M20.839 6.026c.006-1.375-1.133-1.973-2.044-2.45-.611-.322-1.119-.589-1.111-1 .007-.313.305-.646.955-.73a4.249 4.249 0 012.221.387l.396-1.846A6.051 6.051 0 0019.149 0c-2.226 0-3.792 1.183-3.807 2.877-.014 1.253 1.119 1.953 1.972 2.37.878.426 1.172.7 1.169 1.082 0 .585-.701.841-1.348.852-1.099.016-1.75-.288-2.267-.529l-.046-.021-.407 1.907c.526.241 1.498.452 2.504.462 2.367 0 3.914-1.169 3.922-2.978l-.002.004zM11.51.163L7.861 8.869H5.48L3.684 1.92c-.11-.428-.204-.584-.536-.765C2.608.861 1.714.586.926.415l.053-.26h3.833a1.048 1.048 0 011.032.888l.948 5.032L9.135.151l2.375.012zM28.8 8.86h-2.082l-.272-1.294h-2.889l-.47 1.301h-2.365L24.101.8a1.03 1.03 0 01.959-.645h1.922L28.8 8.86zm-4.594-3.084l1.186-3.268.676 3.276-1.862-.008zM12.869 8.861L14.731.155h-2.255L10.613 8.86h2.256z"
			></path>
		</svg>
	);
}

export function AmericanExpress() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 9">
			<path
				fill="#2478BC"
				d="M4.499 0L.437 8.988h4.862l.603-1.433H7.28l.603 1.433h5.352V7.895l.477 1.093h2.768l.477-1.116v1.116h11.131l1.354-1.395 1.267 1.395L36.426 9l-4.074-4.48L36.426 0h-5.628L29.48 1.37 28.253 0H16.144l-1.04 2.32L14.04 0H9.187v1.057L8.648 0H4.499zm.94 1.276H7.81l2.694 6.096V1.276H13.1l2.081 4.37 1.918-4.37h2.583v6.45H18.11l-.012-5.054-2.292 5.054H14.4l-2.305-5.054v5.054H8.861L8.248 6.28H4.936l-.612 1.445H2.591l2.848-6.449zm15.682 0h6.392l1.955 2.112 2.018-2.112h1.955L30.47 4.518l2.971 3.204h-2.044l-1.955-2.136-2.028 2.136h-6.293V1.276zM6.592 2.368L5.501 4.944h2.181l-1.09-2.576zm16.107.244v1.177h3.487v1.312h-3.487v1.286h3.911l1.818-1.893-1.741-1.883h-3.988z"
			></path>
		</svg>
	);
}

export function MasterCard() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12">
			<g fill="none">
				<path
					fill="#F26122"
					d="M6.71 1.283h5.678v9.433H6.71z"
					transform="translate(.555)"
				></path>
				<path
					fill="#EA1D25"
					d="M9.524 10.717A5.789 5.789 0 015.891 12a5.943 5.943 0 01-5.89-6 5.944 5.944 0 015.89-6c1.322 0 2.604.453 3.633 1.283a6.081 6.081 0 000 9.434z"
					transform="translate(.555)"
				></path>
				<path
					fill="#F69E1E"
					d="M19.064 6a5.944 5.944 0 01-5.89 6 5.79 5.79 0 01-3.634-1.283 6.082 6.082 0 000-9.434A5.789 5.789 0 0113.173 0a5.943 5.943 0 015.891 6z"
					transform="translate(.555)"
				></path>
			</g>
		</svg>
	);
}

export function Gpay({ color }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 12">
			<g fill="none" fillRule="evenodd">
				<path
					fill={color}
					fillRule="nonzero"
					d="M13.624 5.865v3.522h-1.1V.694h2.918a2.594 2.594 0 011.886.755A2.535 2.535 0 0117.451 5l-.123.124c-.513.493-1.141.742-1.886.742h-1.818zm0-4.104v3.037h1.845a1.43 1.43 0 001.087-.451 1.546 1.546 0 00-.034-2.156 1.493 1.493 0 00-1.053-.43h-1.845zm7.032 1.483c.813 0 1.456.222 1.927.659.472.436.704 1.046.704 1.816v3.667h-1.052V8.56h-.048c-.458.68-1.059 1.019-1.818 1.019-.642 0-1.189-.194-1.619-.582a1.852 1.852 0 01-.65-1.456c0-.617.233-1.102.691-1.47.457-.367 1.072-.547 1.838-.547.656 0 1.189.125 1.613.36V5.63a1.31 1.31 0 00-.451-.991 1.588 1.588 0 00-1.06-.41c-.615 0-1.1.264-1.455.79l-.971-.616c.52-.77 1.306-1.158 2.351-1.158zm-1.421 4.319c0 .29.136.561.362.728.246.194.547.298.854.29a1.73 1.73 0 001.237-.52c.362-.346.547-.755.547-1.226-.342-.277-.82-.416-1.435-.41-.444 0-.82.112-1.121.327-.294.215-.444.485-.444.81z"
					transform="translate(.403)"
				></path>
				<path
					fill={color}
					d="M29.328 3.439L25.651 12h-1.134l1.366-2.995-2.412-5.566h1.196l1.743 4.27h.02l1.702-4.27z"
					transform="translate(.403)"
				></path>
				<path
					fill="#4285F4"
					d="M9.644 5.102c0-.34-.027-.679-.082-1.012h-4.64v1.92H7.58a2.314 2.314 0 01-.984 1.519v1.247h1.586c.929-.866 1.462-2.149 1.462-3.674z"
					transform="translate(.403)"
				></path>
				<path
					fill="#34A853"
					d="M4.922 9.983c1.325 0 2.446-.444 3.259-1.206L6.596 7.529c-.444.305-1.012.478-1.674.478-1.285 0-2.372-.88-2.761-2.059H.527v1.29a4.91 4.91 0 004.395 2.745z"
					transform="translate(.403)"
				></path>
				<path
					fill="#FBBC04"
					d="M2.161 5.948a3.053 3.053 0 010-1.913V2.752H.528a5.011 5.011 0 000 4.479l1.633-1.283z"
					transform="translate(.403)"
				></path>
				<path
					fill="#EA4335"
					d="M4.922 1.976a2.63 2.63 0 011.886.749l1.407-1.428A4.71 4.71 0 004.922 0 4.916 4.916 0 00.527 2.752l1.634 1.29c.389-1.186 1.476-2.066 2.761-2.066z"
					transform="translate(.403)"
				></path>
			</g>
		</svg>
	);
}

export function GpayCard() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 44 32"
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill="#3C4043"
					fillRule="nonzero"
					d="M21.2 15.58v4.54h-1.42V8.9h3.77a3.35 3.35 0 012.44.97 3.27 3.27 0 01.16 4.59l-.16.16c-.66.63-1.48.96-2.44.96H21.2zm0-5.3v3.92h2.39a1.84 1.84 0 001.4-.58 2 2 0 00-.04-2.79 1.92 1.92 0 00-1.36-.56H21.2zm9.09 1.91c1.05 0 1.88.29 2.49.85.6.57.9 1.35.9 2.35v4.73h-1.35v-1.06h-.07a2.7 2.7 0 01-2.34 1.32c-.83 0-1.54-.25-2.1-.76a2.39 2.39 0 01-.83-1.88c0-.8.3-1.42.89-1.9a3.7 3.7 0 012.37-.7c.85 0 1.54.16 2.09.46v-.33c0-.49-.22-.96-.59-1.28a2.05 2.05 0 00-1.37-.53c-.79 0-1.42.34-1.88 1.02l-1.25-.8c.67-.99 1.69-1.49 3.04-1.49zm-1.84 5.58c0 .38.18.73.47.94.32.25.7.39 1.1.38.6 0 1.18-.25 1.6-.68.47-.44.7-.97.7-1.58a2.81 2.81 0 00-1.85-.53c-.57 0-1.06.14-1.44.42-.39.28-.58.63-.58 1.05z"
				></path>
				<path
					fill="#3C4043"
					d="M41.49 12.44L36.74 23.5h-1.47l1.77-3.87-3.12-7.19h1.55l2.25 5.52h.03l2.2-5.52z"
				></path>
				<path
					fill="#4285F4"
					d="M15.46 14.59c0-.44-.04-.88-.1-1.3h-6v2.47h3.43a2.99 2.99 0 01-1.27 1.97v1.6h2.05a6.33 6.33 0 001.89-4.74z"
				></path>
				<path
					fill="#34A853"
					d="M9.36 20.9c1.71 0 3.16-.58 4.2-1.56l-2.04-1.62a3.81 3.81 0 01-5.73-2.04H3.7v1.67a6.34 6.34 0 005.67 3.54z"
				></path>
				<path
					fill="#FBBC04"
					d="M5.8 15.68a3.94 3.94 0 010-2.47v-1.66H3.67a6.47 6.47 0 000 5.79l2.11-1.66z"
				></path>
				<path
					fill="#EA4335"
					d="M9.36 10.55a3.4 3.4 0 012.43.97l1.82-1.84A6.09 6.09 0 009.36 8c-2.4 0-4.6 1.38-5.68 3.56l2.11 1.66a3.8 3.8 0 013.57-2.67z"
				></path>
				<path
					fill="#B0B0B0"
					d="M2.04 1C1.47 1 1 1.47 1 2.05v27.9c0 .58.47 1.05 1.04 1.05h39.92c.57 0 1.04-.47 1.04-1.05V2.05C43 1.47 42.53 1 41.96 1H2.04zM0 2.05C0 .92.9 0 2.04 0h39.92C43.1 0 44 .92 44 2.05v27.9c0 1.13-.9 2.05-2.04 2.05H2.04A2.04 2.04 0 010 29.95V2.05z"
				></path>
			</g>
		</svg>
	);
}