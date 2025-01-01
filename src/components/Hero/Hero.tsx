import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";

export const Hero = () => {
  return (
    <section className="lg:pb-20 flex flex-col gap-6 lg:flex-row xl:gap-20 lg:justify-between">
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl max-lg:text-center">
          Protegé <b className="underline decoration-yellow-300">tu futuro</b>
        </h1>
        <p className="text-neutral-400 max-lg:text-center">
          Somos una empresa familiar con 50 años de historia en el mercado,
          dedicados a la intermediación en la celebración de contratos de
          seguros. Desde John Pellegrini Management Group Srl nos dedicamos a
          brindar asesoramiento y acompañamiento en todo el proceso de
          coberturas de los riesgos que necesitas proteger mediante nuestros
          equipos profesionales priorizando la atencion, respuesta rápida y
          compromiso con quienes nos eligen.
        </p>
        <div className="max-lg:text-center">
          <button className="bg-[#dacf76] hover:bg-[#b8ac63] text-black py-3 w-1/2 rounded-md transition">
            Contactanos
          </button>
        </div>
      </FramerComponent>
      <FramerComponent
        style="w-full rounded-md lg:max-w-xl"
        animationInitial={{ x: 200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <div className="relative w-full h-auto pt-10">
          <Image
            src="/manos.jpg"
            width={1440}
            height={960}
            objectFit="cover"
            objectPosition="center"
            alt="Imagen de manos contratando"
            className="rounded-md"
          />
        </div>
      </FramerComponent>
    </section>
  );
};
