"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";

export const Testimonials = () => {
  return (
    <section className="flex flex-col pt-10 w-full gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-[#dacf76] font-semibold">Que dicen de nosotros</h3>
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold">
          Testimonios
        </h2>
      </div>
      <CarouselComponent />
    </section>
  );
};

const CarouselComponent = () => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-64 -ml-4">
        {[1, 2, 3, 4, 5].map((x, i) => (
          <CarouselItem className="pl-4 lg:basis-1/3" key={i}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">...</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
};
