"use client";

import Image from "next/image";

export default function CrowdVisualSection() {
  return (
    <section className="relative w-full bg-[#891217] overflow-hidden mt-[-30px] z-10 pointer-events-none">
      
 
      <div className="relative w-full aspect-[16/13] max-h-[1200px] mx-auto">

        {/* 2. Lights - Sitting behind everything */}
        <div className="absolute bottom-[38%] w-full z-0">
          <Image 
            src="/Lights.png" 
            alt="Lights" 
            width={1920} 
            height={400} 
            className="w-full h-auto"
          />
        </div>

        {/* 3. Back Crowd - Silhouette (Your adjusted position: bottom-[35%]) */}
        <div className="absolute bottom-[25%] w-full z-10">
          <Image 
            src="/Back crowd.png" 
            alt="Back Crowd" 
            width={1920} 
            height={400} 
            className="w-full h-auto"
          />
        </div>

      
        {/* 5. Front Crowd - The closest layer */}
        <div className="absolute bottom-0 w-full z-30">
          <Image 
            src="/FRONT CROWD.png" 
            alt="Front Crowd" 
            width={1920} 
            height={400} 
            className="w-full h-auto"
          />
        </div>

        <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[70%] z-40">
            <Image 
              src="/alcheringa-logo.svg" 
              alt="Alcheringa Logo" 
              width={600} 
              height={300} 
              className="w-full h-auto drop-shadow-2xl"
            />
        </div>

      </div>
    </section>
  );
}