import React, { useState } from 'react';
import PremiumPricingCard from './components/PremiumPricingCard';

export default function App() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: 'Starter',
      price: isAnnual ? 182 : 19,
      features: [
        'Basic Features',
        'Email Support',
        'Public Profile',
        'Community Access',
      ],
      decs: 'Essential tools to kickstart your project with basic.',
    },
    {
      title: 'Premium',
      price: isAnnual ? 951 : 99,
      features: [
        'Everything in Starter',
        'Priority Support',
        'Advanced Analytics,',
        'Dedicated Manager',
        'Dedicated Server',
        'Advanced Security Suite',
        'User Training Sessions',
        'Personalized Dashboard',
      ],
      isPopular: true,
      decs: 'Unlock powerful analytics and priority access to scale your business.',
    },
    {
      title: 'Enterprise',
      price: isAnnual ? 470 : 49,
      features: [
        'Custom Solutions',
        '24/7 Support',
        'Dedicated Manager',
        'Custom Branding',
        'API Access',
        'Standard Security',
      ],
      decs: 'Tailored, mid-performance solutions for large-scale operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-5">Pricing Card</h1>
        <p className="text-gray-500 text-lg mb-12">
          Choose the perfect plan that fits your needs. Whether you're just
          starting out or scaling your business, we have a solution for
          you.Switch between monthly and annual billing to{' '}
          <span className="text-yellow-500 font-semibold">save up to 20%</span>{' '}
          on all plans. Cancel anytime, no questions asked.
        </p>

        <div className="text-center">
          {/* Toggle */}
          <div className="flex justify-center items-center mb-16 gap-4">
            <span
              className={`font-bold ${
                !isAnnual ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-blue-500 rounded-full p-1 flex items-center"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`font-bold ${
                isAnnual ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              Annually
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <PremiumPricingCard
                key={i}
                {...plan}
                period={isAnnual ? '/year' : '/mo'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
