import { FramerComponent } from "../Framer/FramerComponent";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6 lg:flex-row xl:gap-20 lg:justify-between">
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24  lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold md:text-5xl">Protege tu futuro</h1>
        <p className="text-neutral-400">
          En nuestra empresa de seguros, nos dedicamos a ofrecerte la
          tranquilidad que necesitas para enfrentar cualquier eventualidad. Con
          una amplia gama de productos, desde seguros de vida hasta seguros de
          automóviles y hogar, estamos aquí para ayudarte a proteger lo que más
          valoras. Nuestro compromiso es brindarte el mejor servicio y
          asesoramiento personalizado para que siempre te sientas seguro.
        </p>
        <button className="bg-[#dacf76] hover:bg-[#b8ac63] text-black py-3 w-1/2 rounded-md transition">
          Contactanos
        </button>
      </FramerComponent>
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <>aca iria la imagen</>
      </FramerComponent>
    </section>
  );
};
