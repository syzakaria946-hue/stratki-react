import PricingCard from "./pricingCard";
import { pricingPlans } from "../constantes";
import pricing from "../assets/image/pricing.png"

export default function Pricing() {
  return (
    <section className=" bg-black/60  bg-blend-multiply  relative py-24 overflow-hidden h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${pricing})`
      
      }}>
      <div className="max-w-7xl mx-auto px-6 relative">

        <h1 className="text-center text-6xl font-extrabold text-white mb-20">
          Pricing Plan
        </h1>

        <div className="relative mt-24 flex flex-col lg:flex-row justify-center items-end text-center">

          {/* Carte gauche */}
  <div className="w-full lg:w-[32%] text-center">
    <PricingCard plan={pricingPlans[0]} />
  </div>

  {/* Carte du milieu */}
  <div className="w-full lg:w-[36%] lg:-mx-8 lg:-translate-y-12 z-20 text-center">
    <PricingCard plan={pricingPlans[1]} />
  </div>

  {/* Carte droite */}
  <div className="w-full lg:w-[32%] text-center">
    <PricingCard plan={pricingPlans[2]} />
  </div>

</div>
         
        </div>
    </section>
  );
}