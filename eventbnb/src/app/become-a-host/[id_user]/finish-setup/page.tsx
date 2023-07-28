import BackButton from "../../../../components/create-halls/backButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";
import Passed from "@/components/create-halls/Passed";

export default function PagePassed2() {
  return (
    <>
    <Passed
      title="Paso 3"
      subtitle="Terminá todo y publicá el salón"
      description="Por último, agregá algunos datos de contacto, ubicación de tu salón de fiestas y cinco fotos o más. Luego, vas a tener que crear un título y una descripción."
    />
    <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
            <BackButton href="./floor-plan"></BackButton>
            <ButtonHalls
              
              href="./photos"
              content="Siguiente"
              backBtn={true}
            />
          </div>
    </>
    
  );
}
