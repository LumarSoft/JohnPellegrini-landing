import Image from "next/image";
export const TypeInsurance = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:gap-8">
          <div className="grid gap-2">
            <p className="text-xl text-[#dacf76] font-semibold text-center sm:text-xl">
              Tipos de seguros
            </p>
            <p className="md:text-xl text-center text-[#d6d6d6]">
              Encuentre la cobertura de seguro adecuada a sus necesidades.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                <Image src="/bike.png" alt="Bike" width={42} height={42} />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Seguro de bicicleta</h3>
                <p className="text-sm ">
                  Proteja a su compañero de dos ruedas.
                </p>
              </div>
            </div>
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                <Image src="/car.png" alt="Car" width={42} height={42} />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Seguro de coche</h3>
                <p className="text-sm ">
                  Proteja su inversión en cuatro ruedas.
                </p>
              </div>
            </div>
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                <Image src="/house.png" alt="Home" width={42} height={42} />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Seguro de hogar</h3>
                <p className="text-sm ">Proteja su activo más valioso.</p>
              </div>
            </div>
            <div className="text-white bg-black relative overflow-hidden rounded-lg p-6 border border-zinc-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold">
                <Image src="/motorbike.png" alt="Bike" width={42} height={42} />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Seguro de moto</h3>
                <p className="text-sm ">
                  Proteja su motocicleta en todo momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
