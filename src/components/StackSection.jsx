import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from '@/components/ui/button.jsx';
import { Layers, Cpu, Network, Shield } from 'lucide-react';

// Importação Real
import produtoImg from '../assets/produto.jpg';

const stackItems = [
    { icon: Layers, title: "O Nexus Manual (E-book Premium)", value: "R$ 197" },
    { icon: Cpu, title: "Banco de Prompts 'Copy & Paste' de Alta Conversão", value: "R$ 147" },
    { icon: Network, title: "Blueprint: Implementação de IA em Negócios", value: "R$ 297" },
    { icon: Shield, title: "Acesso Vitalício + Atualizações Mensais", value: "Inestimável" },
];

const StackSection = memo(({ checkoutLink, onTrack }) => {
  const [stackRef, stackVisible] = useScrollAnimation(0.1);

  return (
    <section id="stack" ref={stackRef} className="relative z-10 py-32 px-4">
      <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Arsenal Completo da Sua <span className="text-[#FF6B35]">Nova Carreira</span></h2>
              
              <div className="space-y-6">
                  {stackItems.map((item, index) => (
                      <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[#2DD4BF]/50 transition-colors duration-300 group">
                          <div className="flex items-center gap-6 mb-4 md:mb-0">
                              <div className="w-12 h-12 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <item.icon className="w-6 h-6 text-[#2DD4BF]" />
                              </div>
                              <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[#FF6B35] font-mono font-bold border border-[#FF6B35]/20">
                              {item.value}
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-16 text-center">
                  <p className="text-xl text-gray-400 mb-6">Valor Total do Stack: <span className="line-through">R$ 641,00</span></p>
                  <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                      Hoje por apenas: <span className="text-[#2DD4BF]">R$ 47,00</span>
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <img 
                            src={produtoImg} 
                            alt="Pack Nexus" 
                            className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] hover:rotate-0 transition-all duration-500" 
                        />
                  </div>

                  <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md" onClick={onTrack}>
                      <Button className="pulse-button w-full h-auto py-3 md:h-16 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-2 md:gap-3 whitespace-normal text-center">
                          GARANTIR MEU ARSENAL AGORA
                      </Button>
                  </a>
              </div>
          </div>
      </div>
    </section>
  );
});

export default StackSection;
