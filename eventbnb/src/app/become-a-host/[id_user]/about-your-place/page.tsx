import Image from "next/image";
import Link from "next/link";
import BackButton from "../../../../components/create-halls/backButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";

export default function Page(){
    return(
        <section className='m-auto py-12 flex flex-col items-center gap-x-12 text-black bg-white'>
            <div className="px-6 md:px-24 flex flex-col md:flex-row items-center py-20">
                <div className='w-full md:w-1/2 flex flex-col items-start gap-y-4'>
                    <span className='font-semibold'>Paso 1</span>
                    <h3 className='font-semibold text-2xl md:text-5xl'>Contanos acerca de tu salón de fiestas</h3>
                    <p className='text-lg md:text-xl'>En este paso, te vamos a preguntar qué tipo de salón tenés y si los huéspedes van a reservar el salón entero o solo una parte. Hacenos saber la ubicación y cuántos huéspedes pueden disfrutar del salón.</p>
                </div>
                <Image width={250} height={250} className='w-full md:w-1/2' src='https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png' alt='step-2'/>
            </div>
            <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
                <BackButton href="./overview"></BackButton>
                <ButtonHalls
                    href="./structure"
                    content="Siguiente"
                    backBtn={true}
                />
            </div>
            
        </section>
    )
}
