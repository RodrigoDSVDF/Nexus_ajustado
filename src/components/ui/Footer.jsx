import { memo } from 'react';
import { Brain, Instagram } from 'lucide-react';

const Footer = memo(() => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 px-4 border-t border-[#111] relative z-10 content-visibility-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-[#2DD4BF]" />
                  <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
              </div>
              <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
                  O manual definitivo para profissionais que desejam liderar a revolução da IA.
              </p>
          </div>
          <div>
              <h4 className="text-white font-bold mb-6">Links Úteis</h4>
              <ul className="space-y-3 text-gray-500">
                  <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Suporte</a></li>
              </ul>
          </div>
          <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <p className="text-gray-500 mb-4">suporte@nexusorigin.com</p>
              <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#FF6B35] transition-colors gap-2">
                  <Instagram className="w-5 h-5" />
                  <span>@nexus0rigin</span>
              </a>
          </div>
      </div>
      <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#111]">
        <p className="text-gray-600 text-sm mb-4">
          &copy; 2025 Nexus Manual. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
