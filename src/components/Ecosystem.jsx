import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Sparkles } from 'lucide-react';

// Importações Reais
import ecossistemaNexusImg from '../assets/ecossistema-nexus.png';
import engenhariaContextoImg from '../assets/engenharia-contexto.png';
import segundoCerebroImg from '../assets/segundo-cerebro.png';
import mapaMentalImg from '../assets/mapa-mental.png';
import simbioseImg from '../assets/simbiose.png';

const ecosystemFeatures = [
  {
    image: ecossistemaNexusImg,
    title: "Chega de Confusão. O Poder da I.A., Unificado.",
    description: "Você já perdeu horas buscando qual a melhor ferramenta de I.A. para cada tarefa? Esse tempo acabou. O Ecossistema Nexus é o centro de comando que integra as I.As mais poderosas do mercado.",
    tagline: "Da Overwhelm à Ação Direcionada."
  },
  {
    image: engenhariaContextoImg,
    title: "Pare de Dar 'Ordens'. Comece a Construir Diálogos.",
    description: "Prompt básico é coisa do passado. A Engenharia de Contexto é a metodologia que ensina você a arquitetar instruções complexas, fornecendo personalidade e objetivo.",
    tagline: "Domine a Linguagem da Nova Era."
  },
  {
    image: segundoCerebroImg,
    title: "Sua Mente Livre para Criar, Seu Segundo Cérebro para Organizar.",
    description: "Ideias brilhantes se perdem na bagunça? O caos mental trava seu potencial? Nosso sistema fornece a estrutura definitiva para capturar e conectar conhecimento.",
    tagline: "Clareza Mental é Produtividade Ilimitada."
  },
  {
    image: mapaMentalImg,
    title: "Acelere Seu Aprendizado em 10x. Visualize o Conhecimento.",
    description: "Entenda conceitos complexos em minutos. Aprenda a usar a I.A. para gerar mapas mentais dinâmicos que conectam informações de forma lógica e visual.",
    tagline: "Estruture Ideias. Expanda Sua Mente."
  },
  {
    image: simbioseImg,
    title: "Não Lute Contra a Máquina. Funda-Se a Ela.",
    description: "Este é o estágio final da evolução pessoal na era digital. A Simbiose homem-máquina não é ficção científica; é uma habilidade prática.",
    tagline: "Seja Imparável. Evolua para o Próximo Nível."
  }
];

const Ecosystem = memo(() => {
  const [ecosystemRef, ecosystemVisible] = useScrollAnimation(0.1);

  return (
    <section id="ecosystem" ref={ecosystemRef} className={`relative z-10 py-32 px-4 bg-[#0A0A0A] transition-all duration-1000 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O <span className="text-[#2DD4BF]">ECOSSISTEMA</span> COMPLETO
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma jornada transformadora que vai da confusão inicial até a maestria simbiótica com a IA
          </p>
        </div>

        <div className="space-y-32">
          {ecosystemFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl border border-[#333] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
                  <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-sm font-semibold text-[#2DD4BF]">
                    {feature.tagline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Ecosystem;
