import { Hero } from "@/components/Hero/Hero";
import { Service1 } from "@/components/Service1/Service1";
import { WeProvide } from "@/components/WeProvide/WeProvide";

export default function Home() {
  return (
    <main className="px-4 md:px-28 2xl:px-80">
      <Hero />
      <WeProvide />
      <Service1/>
    </main>
  );
}
