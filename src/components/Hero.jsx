// src/components/Hero.jsx
import { memo } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ChevronRight, Shield, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import brainNetworkImg from '../assets/1000393266.jpg'; // Ideal: usar .webp

const Hero = memo(({ checkoutLink, onTrack }) => {
  const [heroRef, heroVisible] = useScrollAnimation();

  return (
    <section id="hero" ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden content-visibility-auto">
      <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Badge */}
        <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
             <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[#2DD4BF]/30 rounded-full flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2DD4BF]"></span>
                </span>
                <span className="text-sm font-semibold text-[#2DD4BF] tracking-wide">
                   Sistema Operacional de Alta Performance com IA
                </span>
             </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight">
           Domine a IA Antes Que <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35]">
             Ela Substitua Você.
           </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
           Pare de correr atrás de ferramentas novas toda semana. Descubra os <span className="text-[#2DD4BF] font-semibold">princípios imutáveis</span> da inteligência artificial.
        </p>

        <div className="flex flex-col items-center gap-6">
           <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="group relative inline-block" onClick={onTrack}>
             <Button className="pulse-button relative w-full md:w-auto h-auto py-3 md:h-16 px-8 md:px-12 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-3">
               QUERO ACESSO VITALÍCIO AGORA
               <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
             </Button>
           </a>
           <div className="flex items-center gap-4 text-sm text-gray-500">
             <span className="flex items-center"><Shield className="w-4 h-4 text-[#2DD4BF] mr-2"/> Compra Segura</span>
             <span className="flex items-center"><Rocket className="w-4 h-4 text-[#2DD4BF] mr-2"/> Acesso Imediato</span>
           </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-30 pointer-events-none -z-10 mix-blend-screen">
          {/* LCP OTIMIZADO: fetchPriority high e decoding async */}
          <img 
            src={brainNetworkImg} 
            alt="Rede Neural Nexus" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto mask-radial-faded" 
          />
      </div>
    </section>
  );
});

export default Hero;
