import { Users } from "lucide-react";
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
            ¿Qué ofrecemos?
          </span>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-6 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                <Image
                    src={"/team.png"}
                    alt="icono de un cohete"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="text-xl font-semibold">Equipo</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Brindamos nuestros servicios con un gran equipo de jóvenes
              profesionales consolidando una tercera generación que continua con
              el compromiso y valores que nos caracterizo desde sus inicio.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-4 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                  <Image
                    src={"/mission.png"}
                    alt="icono de un cohete"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="text-xl font-semibold">Misión</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Nuestra misión día a día es brindar acompañamiento a nuestros
              clientes .Implementamos un modelo de cercanía con este propósito y
              así lograr un vinculo fuerte proporcionando seguridad y
              asesoramiento constante
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#303036] px-4 py-4 text-sm bg-[#18181B] h-full">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-md p-3 flex items-center justify-center bg-[#E6E6E6] px-2 py-2">
                  <Image
                    src={"/quality.png"}
                    alt="icono de un cohete"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="text-xl font-semibold">Experiencia</p>
              </div>
            </div>
            <p className="text-gray-200 mt-4 text-base flex-grow">
              Luego de décadas de desarrollo y crecimiento nos destacamos por
              formar profesionales , construir vínculos solidos con clientes y
              aseguradoras y adaptarnos a las nuevas tecnologías, siempre
              conservando los valores como la honestidad, la responsabilidad y
              el compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
