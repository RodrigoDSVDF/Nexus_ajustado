import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AlertTriangle } from 'lucide-react';

// Atenção: Confirme se a imagem "fundo02.jpg" está na pasta "src/assets"
// Se não tiver, o código vai dar erro. Você pode remover a linha do import e da tag <img> se não tiver a imagem.
import fundo02 from '../assets/fundo02.jpg';

const PainSection = memo(() => {
  const [painRef, painVisible] = useScrollAnimation(0.2);

  return (
    <section id="pain" ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/20 to-[#FF6B35]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  {/* Se tiver convertido para webp, mude a extensão abaixo */}
                  <img 
                    src={fundo02} 
                    alt="Caos Digital" 
                    loading="lazy" 
                    decoding="async" 
                    className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" 
                  />
              </div>
              <div className="md:col-span-3 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                      A "Corrida dos Ratos" Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF4F1F]">Está Te Deixando Para Trás.</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                      Enquanto você gasta horas tentando entender a "ferramenta de IA da semana", os top performers do mercado já estão usando sistemas validados para produzir 10x mais rápido.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start p-4 bg-[#111]/50 border border-[#FF6B35]/20 rounded-xl hover:border-[#FF6B35]/50 transition-colors">
                          <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
                          <span><strong className="text-white">Ansiedade Tecnológica:</strong> A sensação constante de que existe algo novo que você deveria saber.</span>
                      </li>
                      <li className="flex items-start p-4 bg-[#111]/50 border border-[#FF6B35]/20 rounded-xl hover:border-[#FF6B35]/50 transition-colors">
                          <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
                          <span><strong className="text-white">Medo da Irrelevância:</strong> Ver profissionais menos experientes te ultrapassarem porque dominam a IA.</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
  );
});

export default PainSection;
