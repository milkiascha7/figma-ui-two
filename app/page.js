import Button from "@/components/Button";

import Benefits from "@/components/benefits/benefits";
import Collaboration from "@/components/collaboration/collaboration";
import Header from "@/components/header/Header";
import Pricing from "@/components/pricing/pricing";
import Hero from "@/components/section/Hero";
import Services from "@/components/services/services";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />

    </>
  );
}
