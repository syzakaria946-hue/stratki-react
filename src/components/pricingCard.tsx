import { Check } from "lucide-react";
import type { pricingPlan } from "../type/pricing";



interface Props {
  plan: pricingPlan;
}

export default function PricingCard({ plan }: Props) {
  return (
    <div
      className={`relative flex  flex-col rounded-md px-8 py-10 shadow-2xl transition-allduration-300hover:scale-[1.02]
        ${
          plan.featured
            ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-[700px] lg:scale-105 z-20"
            : "bg-white text-gray-800 min-h-[620px]"
        }
      `}
    >
      {/* Titre */}
      <h2
        className={`text-3xl lg:text-4xl font-bold mb-8 ${
          plan.featured ? "text-green-400" : "text-blue-700"
        }`}
      >
        {plan.title}
      </h2>

      {/* Prix */}
      <h1 className="text-5xl lg:text-6xl font-extrabold mb-8">
        {plan.price}
      </h1>

      {/* Description */}
      <p
        className={`leading-8 mb-10 ${
          plan.featured ? "text-white" : "text-gray-700"
        }`}
      >
        {plan.description}
      </p>

      {/* Liste */}
      <div className="space-y-5">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <Check
              size={20}
              strokeWidth={3}
              className={
                plan.featured
                  ? "text-green-400"
                  : "text-green-600"
              }
            />

            <span className="text-base lg:text-lg">
              {feature}
            </span>
          </div>
        ))}
      </div>

      
    </div>
  );
}