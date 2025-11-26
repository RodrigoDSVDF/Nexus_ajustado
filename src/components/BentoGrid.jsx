import { useState, memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Zap, Terminal, Target, ChevronRight } from 'lucide-react';

// Importações Reais
import produtividadeImg from '../assets/produtividade.jpg';
import servicosIaImg from '../assets/servicos-ia.jpg';
import xadrezImg from '../assets/xadrez-estrategia.jpg';
import promptImg from '../assets/engenharia_prompt.png';

const featuresData = [
  { 
    colSpan: "md:col-span-2", 
    bgImage: xadrezImg, 
    icon: Brain, 
    title: "O Cérebro Digital", 
    desc: "Não aprenda ferramentas. Aprenda os fundamentos cognitivos da IA que nunca mudam." 
  },
  { 
    colSpan: "md:col-span-1", 
    bgImage: servicosIaImg, 
    icon: Zap, 
    title: "Velocidade Warp", 
    desc: "Automatize 80% do seu trabalho operacional e foque apenas no estratégico." 
  },
  { 
    colSpan: "md:col-span-1", 
    bgImage: promptImg, 
    icon: Terminal, 
    title: "Engenharia de Prompt", 
    desc: "A nova linguagem de programação. Fale a língua da máquina fluentemente." 
  },
  { 
    colSpan: "md:col-span-2", 
    bgImage: produtividadeImg, 
    icon: Target, 
    title: "Vantagem Injusta", 
    desc: "Implemente estratégias de nível sênior e domine o mercado." 
  },
];

const BentoGrid = memo(({ checkoutLink, onTrack }) => {
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1);
  const [activeFeature, setActiveFeature] = useState(featuresData[0]);

  return (
    <section id="bento" ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        {/* Preload invisível */}
        <div className="hidden">
            {featuresData.map(f => <img key={f.title} src={f.bgImage} alt="" />)}
        </div>

        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[#2DD4BF]">Nexus Manual</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Não é um curso. É um sistema operacional mental.
                </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {featuresData.map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => setActiveFeature(item)} 
                        className={`${item.colSpan} group relative bg-[#14222E] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 nexus-card border ${activeFeature.title === item.title ? 'border-[#FF4F1F] shadow-xl shadow-[#FF4F1F]/20 scale-[1.03]' : 'border-[#1C2A35] hover:border-[#2DD4BF]/50'}`}
                    >
                        {item.bgImage && (
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={item.bgImage} 
                                    alt={item.title} 
                                    loading="lazy" 
                                    decoding="async"
                                    className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 mix-blend-overlay" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14222E] via-[#14222E]/80 to-transparent"></div>
                            </div>
                        )}
                        
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${activeFeature.title === item.title ? 'bg-[#FF4F1F]/20 border border-[#FF4F1F]' : 'bg-[#1A2A3A] border border-[#2DD4BF]/30 group-hover:scale-110'}`}>
                                <item.icon className={`w-7 h-7 ${activeFeature.title === item.title ? 'text-[#FF4F1F]' : 'text-[#2DD4BF]'}`} />
                            </div>
                            <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeFeature.title === item.title ? 'text-[#FF4F1F]' : 'text-white'}`}>{item.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
});

export default BentoGrid;
