import Button from "@/components/Button";
import Header from "@/components/header/Header";
import Hero from "@/components/section/Hero";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Hero />

      </div>
    </>
  );
}
