import { memo } from 'react';
import { ChevronRight } from 'lucide-react';

const faqItems = [
  { q: "Preciso saber programar para usar o Nexus?", a: "Absolutamente não. O Nexus foi desenhado para profissionais de qualquer área. Focamos na lógica e estratégia, não em código." },
  { q: "A IA muda toda semana, o material não vai ficar obsoleto?", a: "Essa é a diferença do Nexus. Focamos nos 'princípios imutáveis' da IA. Além disso, você tem atualizações vitalícias garantidas." },
  { q: "Em quanto tempo vejo resultados?", a: "Nossos alunos relatam ganho de produtividade nas primeiras 24 horas após aplicarem os primeiros blueprints do manual." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se achar que não é para você, devolvemos 100% do seu investimento, sem perguntas." },
];

const FAQ = memo(() => {
  return (
    <section id="faq" className="relative z-10 py-24 px-4 content-visibility-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
              {faqItems.map((item, index) => (
                  <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[#2DD4BF]/50 transition-colors">
                      <details className="group">
                          <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                              <h3 className="text-lg font-bold text-white">{item.q}</h3>
                              <ChevronRight className="w-5 h-5 text-[#2DD4BF] transform group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-[#333] bg-[#0A0A0A]/50">
                              {item.a}
                          </div>
                      </details>
                  </div>
              ))}
          </div>
        </div>
    </section>
  );
});

export default FAQ;
