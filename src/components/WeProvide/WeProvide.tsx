import { FramerComponent } from "../Framer/FramerComponent";

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
    <div className="pt-20 lg:pb-20 flex flex-col gap-12">
      <FramerComponent
        style="flex flex-col items-center gap-4"
        animationInitial={{ opacity: 0, y: 50 }}
        animationWhileInView={{ opacity: 1, y: 0 }}
        animationTransition={{ duration: 0.3, delay: 0.1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="text-[#dacf76] font-semibold">Qué Ofrecemos</h3>
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold">
          Brindamos soluciones avanzadas para proteger tu futuro
        </h2>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:flex-row items-center"
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <FramerComponent
          style="flex flex-col p-6 w-full h-80 lg:h-64 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_rgba(218,207,118,0.75)] transition-shadow duration-300"
          key={1}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="text-[#dacf76] font-semibold text-center mb-4">
            Localización
          </h3>
          <p className="text-white">
            Brindamos nuestros servicios en tres sucursales: Rosario, Funes y
            Pueblo Esther. Contamos con un gran equipo de jóvenes profesionales,
            consolidando una tercera generación en nuestra historia.
          </p>
        </FramerComponent>
        <FramerComponent
          style="flex flex-col p-6 w-full h-80 lg:h-64 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_rgba(218,207,118,0.75)] transition-shadow duration-300"
          key={2}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="text-[#dacf76] font-semibold text-center mb-4">
            Misión
          </h3>
          <p className="text-white">
            Nuestra misión día a día es brindar acompañamiento a nuestros
            asegurados. Pensamos el modelo de cercanía con este propósito, poder
            tener un vínculo fuerte, brindar seguridad y asesoramiento
            constante.
          </p>
        </FramerComponent>
        <FramerComponent
          style="flex flex-col p-6 w-full h-80 lg:h-64 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_rgba(218,207,118,0.75)] transition-shadow duration-300"
          key={3}
          animationInitial={{ opacity: 0, y: 50 }}
          animationVariants={itemAnimado}
        >
          <h3 className="text-[#dacf76] font-semibold text-center mb-4">
            Visión
          </h3>
          <p className="text-white">
            Sin dudas, perdurar en el tiempo es sinónimo de compromiso para
            quienes nos eligen. Seguiremos siempre sobre esa base, que nos
            permite continuar con el compromiso y los valores que caracterizaron
            a nuestra organización desde sus inicios.
          </p>
        </FramerComponent>
      </FramerComponent>
    </div>
  );
};
