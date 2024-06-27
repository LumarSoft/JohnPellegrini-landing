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
    <div className="pt-10 lg:pb-44 flex flex-col gap-12">
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
        {[1, 2, 3].map((x, i) => (
          <FramerComponent
            style="w-full h-80 lg:max-w-96 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_rgba(218,207,118,0.75)] transition-shadow duration-300"
            key={i}
            animationInitial={{ opacity: 0, y: 50 }}
            animationVariants={itemAnimado}
          >
            texto
          </FramerComponent>
        ))}
      </FramerComponent>
    </div>
  );
};
