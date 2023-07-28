import BackButton from "../../../../components/create-halls/backButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";
import Passed from "@/components/create-halls/Passed";

export default function PagePassed2() {
  return (
    <>
      <Passed
        title="Paso 2"
        subtitle="Hacé que tu salón de fiestas se destaque"
        description="En este paso, agregá algunos datos básicos sobre tu salón. Después vas a poder agregar más información, como imagenes, descripción, etc."
      />
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
        <BackButton href="./structure"></BackButton>
        <ButtonHalls href="./floor-plan" content="Siguiente" backBtn={true} />
      </div>
    </>
  );
}
