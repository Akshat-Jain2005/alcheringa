"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "Is there an event for people who just came for the food?",
    answer: "You dumbass hungry person, you should enjoyyyyy",
  },
  {
    question: "What if I lose my friends?",
    answer: "Don't worry, make new ones! Or head to the Lost & Found booth.",
  },
  {
    question: "I downloaded the app. Now what?",
    answer: "Login with your registered email and explore the schedule!",
  },
  {
    question: "Is there Wi-Fi?",
    answer: "Yes, free Wi-Fi is available throughout the venue.",
  },
  {
    question: "Can I volunteer just for the free merch?",
    answer: "We love the honesty, but we need hardworking people too!",
  },
  {
    question: "What if it rains?",
    answer: "The event is rain or shine! We have covered areas.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center overflow-visible"
      style={{
        width: '1538px',
        height: '923px',
        zIndex: 0,
      }}
    >
      {/* 1. Main Background Image - PLEASE RENAME YOUR FILE TO faq-bg.png */}
      <Image 
        src="/faq-bg.png" 
        alt="Background" 
        fill 
        className="object-cover z-0 pointer-events-none" 
        priority
      />

      {/* 2. Left Ribbon */}
      <div
        style={{
          position: 'absolute',
          width: '570.76px',
          height: '986.27px',
          left: '-62px',
          transform: 'rotate(-2.00deg)',
          zIndex: 10, 
          pointerEvents: 'none'
        }}
      >
        <Image src="/ribbon-left.png" alt="Left Ribbon" fill className="object-contain" />
      </div>

      {/* 3. Right Ribbon */}
      <div
        style={{
          position: 'absolute',
          width: '571.76px',
          height: '991.27px',
          left: '990.99px',
          transform: 'rotate(0.0deg)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <Image src="/ribbon-right.png" alt="Right Ribbon" fill className="object-contain" />
      </div>
      {/* Top Left Spade */}
      <div className="absolute top-10 left-20 w-32 h-32 z-10 pointer-events-none opacity-90">
         <Image src="/Spade (1).png" alt="Spade" fill className="object-contain" />
      </div>

      {/* Top Right Spade */}
      <div className="absolute top-10 right-20 w-32 h-32 z-10 pointer-events-none opacity-90 transform scale-x-[-1]">
         <Image src="/Spade (1).png" alt="Spade" fill className="object-contain" />
      </div>

      {/* Middle Left Heart */}
      <div 
        className="absolute z-10 pointer-events-none"
        style={{
          top: '22%',
          left: '18%',
          width: '70px',
          height: '74px',
          transform: 'rotate(-15deg)'
        }}
      >
         <Image src="/Heart (3).png" alt="Heart" fill className="object-contain" />
      </div>

      {/* Middle Right Heart */}
      <div 
        className="absolute z-10 pointer-events-none"
        style={{
          top: '10%',
          right: '2%',
          width: '79px',
          height: '74px',
        }}
      >
         <Image src="/Heart (3).png" alt="Heart" fill className="object-contain" />
      </div>

      {/* Lower Mid Left Club */}
      <div 
        className="absolute z-8 pointer-events-none"
        style={{
          top: '60%',
          left: '0%',
          width: '85px',
          height: '85px',
          transform: 'rotate(-10deg)'
        }}
      >
         <Image src="/Club (1).png" alt="Club" fill className="object-contain" />
      </div>

      {/* Lower Mid Right Club */}
      <div 
        className="absolute z-10 pointer-events-none"
        style={{
          top: '55%',
          right: '14%',
          width: '85px',
          height: '85px',
          transform: 'rotate(10deg)'
        }}
      >
         <Image src="/Club (1).png" alt="Club" fill className="object-contain" />
      </div>

      {/* --- NEW: Bottom Diamonds --- */}
      {/* Bottom Left Diamond */}
      <div 
        className="absolute z-10 pointer-events-none"
        style={{
          top: '82%',
          left: '22%',
          width: '75px',
          height: '90px',
          transform: 'rotate(-8deg)'
        }}
      >
         <Image src="/Diamond (1).png" alt="Diamond" fill className="object-contain" />
      </div>

      {/* Bottom Right Diamond */}
      <div 
        className="absolute z-10 pointer-events-none"
        style={{
          top: '80%',
          right: '22%',
          width: '75px',
          height: '90px',
          transform: 'rotate(12deg)'
        }}
      >
         <Image src="/Diamond (1).png" alt="Diamond" fill className="object-contain" />
      </div>

      {/* 4. FAQ Content */}
      <div className="relative z-20 w-full max-w-3xl pt-32 px-4 space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Ticket Borders */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-900 rounded-l-md z-10 border-r border-black" />
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-red-900 rounded-r-md z-10 border-l border-black" />

            <div className="bg-white border-2 border-black rounded-md overflow-hidden mx-1">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-black font-sans">
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                   {/* Arrow Icon */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
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
    </div>
  );
}