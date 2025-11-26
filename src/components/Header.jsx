// src/components/Header.jsx
import { memo } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Brain, Network, Layers, Zap, Shield } from 'lucide-react';

const NAV_ITEMS = [
    { title: "INÍCIO", icon: Brain, id: "hero" },
    { title: "ECOSSISTEMA", icon: Network, id: "ecosystem" },
    { title: "SOLUÇÃO", icon: Layers, id: "bento" },
    { title: "OFERTA", icon: Zap, id: "stack" },
    { title: "GARANTIA", icon: Shield, id: "offer" },
];

const Header = memo(({ checkoutLink, onTrack }) => {
    const handleScroll = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333] shadow-lg will-change-transform">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">
                <button onClick={() => handleScroll('hero')} className="flex items-center gap-2 cursor-pointer">
                    <Brain className="w-7 h-7 text-[#2DD4BF]" />
                    <span className="text-xl font-bold text-white">NEXUS MANUAL</span>
                </button>
                <nav className="hidden lg:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-[#2DD4BF] transition-colors group"
                        >
                            <item.icon className="w-4 h-4 mr-1 text-[#2DD4BF] group-hover:text-white transition-colors" />
                            {item.title}
                        </button>
                    ))}
                </nav>
                <a href={checkoutLink} target="_blank" rel="noopener noreferrer" onClick={onTrack}>
                    <Button className="h-10 px-6 text-sm font-semibold bg-[#FF6B35] hover:bg-red-600 transition-colors">
                        ACESSO IMEDIATO
                    </Button>
                </a>
            </div>
        </header>
    );
});

export default Header;
