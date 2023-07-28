import Link from "next/link";
import Image from "next/image";
import Back from "@/components/back/Back";

const overview = () => {
  return (
    <section className="bg-white text-black ">
      <Back />
      <div className="flex flex-col xl:flex-row items-center gap-x-16 gap-y-6 py-6 xl:py-20 px-6 xl:px-20">
        <h3 className="text-4xl xl:text-6xl font-semibold w-full xl:w-1/2">
          Comenzar a usar eventbnb es fácil
        </h3>
        <div className="w-full xl:w-1/2 flex flex-col gap-y-6">
          <div className="flex items-center w-full border-b">
            <div className="pb-8 w-full xl:w-3/4">
              <h4 className="text-xl md:text-2xl font-semibold">
                1 Contanos acerca de tu salón
              </h4>
              <p className="ml-6 text-black/50">
                Compartí algunos datos básicos, como la ubicación y cuántas
                personas pueden quedarse en el lugar.
              </p>
            </div>
            <Image
              width={250}
              height={250}
              className="w-1/4"
              src="https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png"
              alt=""
            />
          </div>
          <div className="flex items-center w-full border-b">
            <div className="pb-8 w-full xl:w-3/4">
              <h4 className="text-xl md:text-2xl font-semibold">
                2 Hacé que se destaque
              </h4>
              <p className="ml-6 text-black/50">
                Agregá al menos 5 fotos más el título y la descripción. Nosotros
                te ayudamos.
              </p>
            </div>
            <Image
              width={250}
              height={250}
              className="w-1/4"
              src="https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png"
              alt=""
            />
          </div>
          <div className="flex items-center w-full">
            <div className="pb-8 w-full xl:w-3/4">
              <h4 className="text-xl md:text-2xl font-semibold">
                3 Terminá todo y publicá el anuncio
              </h4>
              <p className="ml-6 text-black/50">
                Elegí si preferís empezar con un huésped que ya lleve un tiempo
                usando la plataforma, establecé un precio inicial y publicá tu
                anuncio.
              </p>
            </div>
            <Image
              width={250}
              height={250}
              className="w-1/4"
              src="https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-end w-full bg-slate-100">
        <Link
          className="bg-pink-600 px-4 py-2 text-white self-end text-end rounded-lg font-semibold w-full xl:w-fit"
          href="./about-your-place"
        >
          Comenzar
        </Link>
      </div>
    </section>
  );
};

export default overview;
