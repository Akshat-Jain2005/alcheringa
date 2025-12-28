"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  { question: "Is there an event for people who just came for the food?", answer: "You dumbass hungry person, you should enjoyyyyy" },
  { question: "What if I lose my friends?", answer: "Don't worry, make new ones! Or head to the Lost & Found booth." },
  { question: "I downloaded the app. Now what?", answer: "Login with your registered email and explore the schedule!" },
  { question: "Is there Wi-Fi?", answer: "Yes, free Wi-Fi is available throughout the venue." },
  { question: "Can I volunteer just for the free merch?", answer: "We love the honesty, but we need hardworking people too!" },
  { question: "What if it rains?", answer: "The event is rain or shine! We have covered areas." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 ">
      
      {/* HEADER */}
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 font-serif drop-shadow-md z-20">
          FAQS
      </h2>

      {/* --- SIDE DECORATIONS (Lightning/Ribbons) --- */}
      {/* Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[600px] pointer-events-none">
           <Image src="/ribbon-left.png" alt="Left Decor" fill className="object-contain object-left" />
      </div>
      {/* Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[600px] pointer-events-none">
           <Image src="/ribbon-right.png" alt="Right Decor" fill className="object-contain object-right" />
      </div>

      {/* Floating Suits */}
      <div className="absolute top-24 left-[20%] w-20 h-20 opacity-80 pointer-events-none"><Image src="/Spade (1).png" alt="Spade" fill className="object-contain"/></div>
      <div className="absolute top-24 right-[20%] w-20 h-20 scale-x-[-1] opacity-80 pointer-events-none"><Image src="/Spade (1).png" alt="Spade" fill className="object-contain"/></div>

      {/* --- FAQ ACCORDION --- */}
      <div className="w-full max-w-4xl px-4 space-y-5 z-30">
        {faqData.map((item, index) => (
          <div key={index} className="relative group w-full">
            
            {/* Borders */}
            <div className="absolute left-[-12px] top-0 bottom-0 w-6">
              <Image src="/Vector (1).png" alt="border" fill className="object-fill" />
            </div>
            <div className="absolute right-[-12px] top-0 bottom-0 w-6 scale-x-[-1]">
              <Image src="/Vector (1).svg" alt="border" fill className="object-fill" />
            </div>

            {/* Card Content */}
            <div className="bg-white border-2 border-black relative z-20 mx-2 rounded-sm shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg md:text-xl text-black font-sans pr-4">
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-200 shrink-0 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100 border-t-2 border-black' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white text-black font-medium text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}