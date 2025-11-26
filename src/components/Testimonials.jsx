import { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star } from 'lucide-react';

// Importações Reais
import socialWoman2 from '../assets/femele_social02.png';
import socialWoman1 from '../assets/femele_social.png';
import socialMan from '../assets/masculino_social.png';

const testimonials = [
    {
        img: socialMan,
        name: "Carlos Mendes",
        role: "Desenvolvedor Senior",
        text: "O material é direto ao ponto. Em uma tarde eu já estava aplicando conceitos que economizaram horas da minha semana."
    },
    {
        img: socialWoman1,
        name: "Ana Paula S.",
        role: "Marketing Digital",
        text: "Eu tinha medo da IA substituir meu trabalho. O Nexus me ensinou a usar ela como minha 'estagiária' de luxo."
    },
    {
        img: socialWoman2,
        name: "Juliana Costa",
        role: "Redatora & Copywriter",
        text: "O banco de prompts se pagou no primeiro projeto que fechei. Não é só teoria, é um sistema prático."
    }
];

const Testimonials = memo(() => {
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1);

  return (
    <section id="reviews" ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0A0A0A] border-y border-[#333]">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[#2DD4BF]">Nexus Manual</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                  <div key={i} className="nexus-card p-8 rounded-3xl relative flex flex-col justify-between bg-[#14222E] border border-[#1C2A35]">
                      <div>
                          <div className="absolute -top-4 left-8 text-[#FF6B35] text-6xl opacity-20">"</div>
                          <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#FF6B35] fill-current" />)}
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">"{item.text}"</p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2DD4BF]">
                              <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <h4 className="font-bold text-white">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.role}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
});

export default Testimonials;
