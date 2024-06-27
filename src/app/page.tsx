import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { WeProvide } from "@/components/WeProvide/WeProvide";

export default function Home() {
  return (
    <main className="px-4 md:px-28 2xl:px-80">
      <Hero />
      <WeProvide />
      <Testimonials />
    </main>
  );
}
