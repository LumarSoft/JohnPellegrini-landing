import Image from "next/image";
import { FramerComponent } from "../Framer/FramerComponent";
export const Companys = () => {
  return (
    <FramerComponent
      animationInitial={{ opacity: 0, y: 50 }}
      animationWhileInView={{ opacity: 1, y: 0 }}
      animationTransition={{ duration: 0.3, delay: 0.1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      <h1 className="text-[#dacf76] font-semibold text-center">
        Empresas con las que trabajamos
      </h1>
      <section className="flex gap-8 mt-5 justify-center flex-col lg:flex-row">
        <div className="flex items-center justify-center bg-black rounded-lg border border-zinc-800 w-full">
          <Image
            src="/triunfoSeguros.png"
            alt="Company 1"
            width={400}
            height={300}
            className=""
          />
        </div>
        <div className="flex items-center justify-center bg-black rounded-lg border border-zinc-800 w-full">
          <Image
            src="/Sancor-Seguros.png"
            alt="Company 2"
            width={250}
            height={250}
            className=""
          />
        </div>
        {/* <div className="flex items-center justify-center bg-black rounded-lg border border-zinc-800 w-full">
          <Image
            src="/lasegunda.png"
            alt="Company 3"
            width={350}
            height={300}
            className=""
          />
        </div> */}
      </section>
    </FramerComponent>
  );
};
