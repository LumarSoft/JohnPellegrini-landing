import { FramerComponent } from "../Framer/FramerComponent";
import Image from "next/image";

export const WeProvide = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <span className="text-2xl sm:text-3xl md:text-xl text-[#dacf76] font-semibold">
            Qué ofrecemos
          </span>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-6 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                  <Image
                    src={"/eye-svgrepo-com.png"}
                    alt="icono de un cohete"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xl font-semibold">Visión</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Sin dudas, perdurar en el tiempo es sinónimo de compromiso para
              quienes nos eligen. Seguiremos siempre sobre esa base, que nos
              permite continuar con el compromiso y los valores que
              caracterizaron a nuestra organización desde sus inicios.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-4 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                  <Image
                    src={"/rocket-svgrepo-com.png"}
                    alt="icono de un cohete"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xl font-semibold">Misión</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Nuestra misión día a día es brindar acompañamiento a nuestros
              asegurados. Pensamos el modelo de cercanía con este propósito,
              poder tener un vínculo fuerte, brindar seguridad y asesoramiento
              constante.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-4 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                  <Image
                    src={"/locate-svgrepo-com.png"}
                    alt="icono de un cohete"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xl font-semibold">Localización</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Brindamos nuestros servicios en tres sucursales: Rosario, Funes y
              Pueblo Esther. Contamos con un gran equipo de jóvenes
              profesionales, consolidando una tercera generación en nuestra
              historia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
