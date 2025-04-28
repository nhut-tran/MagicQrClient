'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  const toggleFAQ = (index: number | undefined) => {
    setOpenIndex(openIndex === index ? undefined : index);
  };

  const faqList = [
    {
      question: 'What is your refund policy?',
      answer: "We offer a 30-day refund if you're not satisfied with our product, no questions asked.",
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach our support team via email at support@example.com.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan anytime from your account settings.',
    },
  ];

  return (
    <div className="section-padding py-20 bg-[#0d0d0d]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Frequently asked questions
        </h2>

        <div className="space-y-6">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-[#161616] border border-[#7434db]/30 rounded-2xl shadow-md transition hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-white text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  color="#7434db"
                  className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
