"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <div 
      className="relative flex flex-col justify-end mx-auto text-white"
      style={{
        width: '1538px',
        height: '1700px',
        backgroundImage: `url('/Frame 185.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute bottom-230 left-0 w-full z-0">
        <Image
          src="/Lights.png" 
          alt="light"
          width={1538}
          height={200} 
          className="w-full object-cover"
        />
      </div>
      
       <div className="absolute bottom-200 left-0 w-full z-0">
        <Image
          src="/Back crowd.png" 
          alt="Back Crowd"
          width={1538}
          height={200} 
          className="w-full object-cover"
        />
      </div>
       <div className="absolute bottom-120 left-0 w-full z-0">
        <Image
          src="/FRONT CROWD.png" 
          alt="Front Crowd"
          width={1538}
          height={200} 
          className="w-full object-cover"
        />
      </div>
      <div 
        className="absolute bottom-0 w-full flex flex-col justify-between px-16 pb-12"
        style={{ 
          height: '750px',
          width: '1538px',
          backgroundImage: `url('/Frame 118.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'

        }} 
      ></div>
      
    </div>
  );
};

export default Footer;