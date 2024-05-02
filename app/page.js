import Button from "@/components/button";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Button className="mt-10" href="#login">Something</Button>
      </div>
    </>
  );
}
