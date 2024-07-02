import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";

export const Service1 = () => {
  return (
    <div className="mt-32 lg:pb-20 flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between ">
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/monumento.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Imagen de manos contratando"
            className="rounded-md"
          />
        </div>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24  lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="text-[#dacf76] font-semibold">¿Quienes somos?</h3>
        <p className="text-neutral-400">
        En el año 1974, Eduardo Pellegrini, miembro fundador de la compañía, luego de trabajar dentro de una aseguradora de primera línea, inicia su camino en la profesión de Productor Asesor de Seguros independiente, creando la base y los valores que hoy en dia, siguen siendo los pilares y la esencia de nuestra empresa.
        </p>
        <h2 className="text-2xl font-semibold">
          Luego de décadas de desarrollo y crecimiento, fuimos creando vinculos con clientes que aún continuan familiarmente con nosotros. Actualmente, la empresa es dirigida por su hijo, John Edward Pellegrini, quien con la misma pasión y dedicación, sigue los pasos de su padre, manteniendo los valores y la esencia de la empresa.
        </h2>
      </FramerComponent>
    </div>
  );
};
