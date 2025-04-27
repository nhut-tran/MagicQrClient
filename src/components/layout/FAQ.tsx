'use client'; // if you're using Next.js 13/14 app directory

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  const toggleFAQ = (index : number | undefined) => {
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
    <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div key={index} className="border border-[#7434db] rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown color="#7434db" className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`} />
              
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 text-gray-300">
                {faq.answer}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
