import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";
import { Car, Home, Store } from "lucide-react";

export const TypeInsurance = () => {
  const insuranceTypes = [
    {
      icon: <Car size={42} />,
      title: "Vehículos",
    },
    {
      icon: <Home size={42} />,
      title: "Hogar",
    },
    {
      icon: <Store size={42} />,
      title: "Comercios",
    },
    {
      icon: (
        <Image src="/accident (1).png" alt="Accident" width={42} height={42} />
      ),
      title: "Accidentes",
    },
  ];

  return (
    <FramerComponent
      style="w-full py-12"
      animationInitial={{ opacity: 0, y: 50 }}
      animationWhileInView={{ opacity: 1, y: 0 }}
      animationTransition={{ duration: 0.3, delay: 0.1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      <div className="container md:px-6">
        <div className="grid gap-6 md:gap-8">
          <FramerComponent style="grid gap-2">
            <p className="text-xl text-[#dacf76] font-semibold text-center sm:text-xl">
              RIESGOS
            </p>
            <p className="md:text-xl text-center text-[#d6d6d6]">
              En <b>JOHN PELLEGRINI MNAGEMENT GROUP</b> asesoramos a nuestros
              clientes en todo tipo de riesgos patrimoniales
            </p>
          </FramerComponent>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {insuranceTypes.map((type, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg p-6 border border-zinc-800 bg-black hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold text-white group-hover:bg-zinc-800 transition-colors">
                  {type.icon}
                </div>
                <div className="mt-4 flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">
                    {type.title}
                  </h3>
                </div>
                <div className="absolute inset-0 border border-[#dacf76]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FramerComponent>
  );
};

export default TypeInsurance;
