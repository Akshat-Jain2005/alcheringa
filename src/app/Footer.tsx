import Image from "next/image";

const navLinks = ["Events", "Competition", "Schedule", "MUN", "Kartavya", "Gallery", "Sponsors", "Merch", "Theme", "Team"];

export default function Footer() {
  return (
    <footer className="relative z-50 bg-[#5C1316] text-white pt-12 pb-8 px-6 border-t border-[#7b1414]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* --- 1. NAVIGATION (Desktop Only usually, or Top of Mobile) --- */}
        <nav className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
          {navLinks.map((item) => (
            <span key={item} className="text-xl font-medium uppercase tracking-widest text-[#ffdfdf] cursor-pointer hover:text-white transition-colors">
              {item}
            </span>
          ))}
        </nav>

        {/* --- 2. MAIN CONTENT AREA --- */}
        {/* Mobile: Flex Column (Socials first, then Names)
            Desktop: Grid/Flex (Names far left/right, Socials bottom center)
        */}
        <div className="w-full flex flex-col md:block relative">

          {/* MOBILE ONLY: Socials & Business appear at TOP on mobile (Order 1) */}
          <div className="flex flex-col items-center md:hidden mb-10 order-1">
             <div className="flex gap-6 mb-4">
                {["instagram", "facebook", "x", "youtube"].map((icon) => (
                  <div key={icon} className="relative w-8 h-8">
                      <Image src={`/icon-${icon}.svg`} alt={icon} fill className="object-contain" />
                  </div>
                ))}
             </div>
             <p className="text-sm opacity-80 text-center">For Business Enquiries</p>
             <p className="text-sm opacity-80 text-center font-semibold">publicrelations@alcheringa.co.in</p>
          </div>

          {/* CONTACTS (Names) */}
          {/* Mobile: Grid (Side by side) | Desktop: Flex (Far edges) */}
          <div className="grid grid-cols-2 gap-8 w-full md:flex md:justify-between items-start md:mb-12 order-2">
            
            {/* Left Contact */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              {/* Desktop: Huge Font | Mobile: Large Font */}
              <h3 className="text-2xl md:text-4xl font-black font-serif uppercase  mb-2 leading-none">
                SIDDHARTH<br className="md:hidden" /> SHUKLA
              </h3>
              <p className="text-sm md:text-xl font-medium opacity-90 tracking-wide">+91 7705088884</p>
              <p className="text-sm md:text-xl font-medium opacity-90 tracking-wide">siddharth@alcheringa.in</p>
            </div>

            {/* Right Contact */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
               {/* Desktop: Huge Font | Mobile: Large Font */}
              <h3 className="text-2xl md:text-4xl font-black font-serif uppercase  mb-2 leading-none">
                SUDHANSHU<br className="md:hidden" /> RAJ
              </h3>
              <p className="text-sm md:text-xl font-medium opacity-90 tracking-wide">+91 7705088884</p>
              <p className="text-sm md:text-xl font-medium opacity-90 tracking-wide">sudhanshu@alcheringa.in</p>
            </div>
          </div>

          {/* DESKTOP ONLY: Socials & Business appear at BOTTOM CENTER */}
          <div className="hidden md:flex flex-col items-center justify-center mt-10">
             <div className="flex gap-8 mb-4">
                {["instagram", "facebook", "x", "youtube"].map((icon) => (
                   <div key={icon} className="relative w-8 h-8 cursor-pointer hover:scale-110 transition-transform">
                      <Image src={`/icon-${icon}.svg`} alt={icon} fill className="object-contain" />
                   </div>
                ))}
             </div>
             <p className="text-lg opacity-80 tracking-wide">For Business Enquiries: publicrelations@alcheringa.co.in</p>
          </div>

        </div>

        {/* --- 3. COPYRIGHT --- */}
        <div className="w-full text-center mt-12 pt-6 border-t border-white/20">
          <p className="text-xs md:text-sm opacity-60 uppercase tracking-widest font-medium">
            Designed and Developed by Alcher Creatives and Alcher Web Operations
          </p>
        </div>

      </div>
    </footer>
  );
}