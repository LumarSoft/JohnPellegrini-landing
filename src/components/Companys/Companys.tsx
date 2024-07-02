import Image from "next/image";
export const Companys = () => {
  return (
    <div>
      <h1 className="text-[#dacf76] font-semibold text-center">
        Empresas con las que trabajamos
      </h1>
      <section className="flex gap-8 mt-5 justify-center">
        <Image
          src="/triunfoSeguros.png"
          alt="Company 1"
          width={400}
          height={300}
          className="bg-black rounded-lg border border-zinc-800"
        />
        <Image
          src="/Sancor-Seguros.png"
          alt="Company 2"
          width={250}
          height={250}
          className="bg-black rounded-lg border border-zinc-800"
        />
        <Image
          src="/lasegunda.png"
          alt="Company 3"
          width={350}
          height={300}
          className="bg-black rounded-lg border border-zinc-800"
        />
      </section>
    </div>
  );
};
