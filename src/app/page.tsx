import { Footer } from "@/components/footer";
import { Banner } from "@/components/hackclub-banner";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Work />
      <Technologies />
      <Footer />
    </>
  );
}
