import { Hero } from "@/components/Hero/Hero";
import { Service1 } from "@/components/Service1/Service1";
import { Service2 } from "@/components/Service2/Service2";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { WeProvide } from "@/components/WeProvide/WeProvide";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <section>
      <main className="px-4 md:px-28 2xl:px-80 py-28 lg:py-48">
        <Hero />
        <p>Tipos de seguros que trabajamos</p>
        <Service1 />
        <WeProvide />
        <p>Empresas que trabajamos</p>
        <Testimonials />
      </main>
      <Footer />
    </section>
  );
}
