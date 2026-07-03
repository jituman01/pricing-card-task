import { Check } from 'lucide-react';
import React from 'react';

const PremiumPricingCard = ({
  title,
  decs,
  price,
  features,
  isPopular,
  period,
}) => {
  return (
    <div
      className={`relative flex flex-col p-5 rounded-3xl border  duration-300 hover:scale-105 shadow-xl 
      ${
        isPopular
          ? 'border-yellow-500 ring-4 ring-yellow-500/10 bg-white'
          : 'border-gray-300 bg-white'
      }`}
    >
      {/* Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-4 py-1 text-xs font-bold text-white shadow-sm">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <div className="mt-2 mb-4">
        <p className=" text-sm text-gray-400 mb-2">{decs}</p>
        <span className="text-4xl font-extrabold">${price}</span>
        <span className="text-gray-500 font-medium">{period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow ">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
              <Check size={14} strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      {/*  button */}
      <button
        className={`w-full py-3 rounded-full font-bold cursor-pointer ${
          isPopular
            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PremiumPricingCard;
