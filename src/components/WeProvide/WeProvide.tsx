export const WeProvide = () => {
  return (
    <div className="pt-36 lg:pb-44 flex flex-col gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-[#dacf76] font-semibold">Qué Ofrecemos</h3>
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold">
          Brindamos soluciones avanzadas para proteger tu futuro
        </h2>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        {[1, 2, 3].map((x, i) => (
          <div
            className="w-full h-80 max-w-96 bg-neutral-500 rounded-md hover:shadow-[0_8px_20px_8px_rgba(218,207,118,0.75)] transition-shadow duration-300"
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
};
