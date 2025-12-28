import FaqSection from "./FaqSection";
import CrowdVisualSection from "./FooterVisualSection"; 
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#891217] min-h-screen overflow-x-hidden flex flex-col">
    
      {/* --- CONTENT STACK --- */}
      <div className="relative z-10 w-full">
        <FaqSection />
        <CrowdVisualSection />
        <Footer />
      </div>

    </main>
  );
}