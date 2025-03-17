import AppBar from "./components/AppBar";
import HeroSection from "./components/HeroSection";
import Girl from "../src/image/girl.png";
import BenefitsSection from "./components/BenefitsSection";
import CountdownTimer from "./components/CountdownTimer";
import PricingSection from "./components/PricingSection";
import ButtonUsage from "./components/ButtonUsage";
const productBenefits = [
  "Якісний гіпоалергенний матеріал",
  "Вирівнювання, приховування недоліків",
  "Акція: -50 грн на другу покупку",
];
export default function Landing() {
  return (
    <div className="mx-auto max-w-7xl">
      <AppBar />
      <div className="flex flex-col   md:flex-row-reverse items-center space-y-4 md:space-x-4 md:space-y-0">
        <HeroSection nameItems={"Мереживна накидка"} imgUrl={Girl} />
        <BenefitsSection benefits={productBenefits} />
      </div>
      <div className="p-5 bg-[#f0f3ee] flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <CountdownTimer />
          <PricingSection originalPrice={275} discountedPrice={249} />
        </div>
        <ButtonUsage />
      </div>
    </div>
  );
}
