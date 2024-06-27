import { FramerComponent } from "../Framer/FramerComponent";

export const Service2 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between ">
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <>aca iria la imagen</>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24  lg:max-w-lg"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="text-[#dacf76] font-semibold">What we provide</h3>
        <h2 className="text-2xl font-semibold">
          We provide advanced solutions to growin your online business
        </h2>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti
          velit voluptas minima, delectus dolore aliquam quibusdam assumenda
          blanditiis iusto suscipit rerum soluta at nobis eligendi iste, in
          veniam quae?
        </p>
      </FramerComponent>
    </div>
  );
};
