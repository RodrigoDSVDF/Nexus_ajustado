import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Zap, CheckCircle, Shield, Rocket, Terminal, Layers, Brain, Cpu } from 'lucide-react';
import './index.css' // Importa o CSS com as animações

// Importações Críticas
import Header from './components/Header'
import Hero from './components/Hero'

// Importações Lazy (Carregamento Otimizado)
const Ecosystem = lazy(() => import('./components/Ecosystem'));
const PainSection = lazy(() => import('./components/PainSection'));
const BentoGrid = lazy(() => import('./components/BentoGrid'));
const StackSection = lazy(() => import('./components/StackSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";

const handleTrackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-slate-100 selection:bg-[#FF4F1F] selection:text-white">
      
      <Header checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
      
      {/* Background Dinâmico */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#2DD4BF]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <main>
        {/* 1. FAIXA DE URGÊNCIA (Velocidade Normal - 30s) */}
        <div className="relative z-20 bg-[#2DD4BF] text-black py-2 border-b border-[#2DD4BF]/50">
            <div className="scrolling-banner-container">
                <div className="scrolling-banner-content font-bold text-sm tracking-widest uppercase">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 px-4">
                            <span className="flex items-center gap-2"><Zap size={16}/> OFERTA DE LANÇAMENTO</span>
                            <span className="flex items-center gap-2"><CheckCircle size={16}/> ACESSO VITALÍCIO</span>
                            <span className="flex items-center gap-2"><Shield size={16}/> GARANTIA DE 7 DIAS</span>
                            <span className="flex items-center gap-2"><Rocket size={16}/> ATUALIZAÇÕES INCLUSAS</span>
                            <span className="flex items-center gap-2"><Zap size={16}/> OFERTA DE LANÇAMENTO</span>
                            <span className="flex items-center gap-2"><CheckCircle size={16}/> ACESSO VITALÍCIO</span>
                            <span className="flex items-center gap-2"><Shield size={16}/> GARANTIA DE 7 DIAS</span>
                            <span className="flex items-center gap-2"><Rocket size={16}/> ATUALIZAÇÕES INCLUSAS</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <Hero checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />

        <Suspense fallback={<div className="py-20 text-center text-[#2DD4BF]">Carregando...</div>}>
            
            <Ecosystem /> 
            <PainSection />
            <BentoGrid checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
            
            {/* 2. FAIXA INTERMEDIÁRIA (Velocidade Rápida - 15s) */}
            <div className="relative z-20 py-4 bg-gradient-to-r from-[#0A0A0A] via-[#111] to-[#0A0A0A] border-y border-[#333]">
                <div className="scrolling-banner-container opacity-80">
                     {/* CLASSE 'fast' ADICIONADA AQUI */}
                     <div className="scrolling-banner-content fast text-[#2DD4BF] font-mono tracking-widest text-lg">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12 px-6">
                                <span className="flex items-center gap-3"><Terminal size={20} className="text-[#FF6B35]"/> ENGENHARIA DE CONTEXTO</span>
                                <span className="flex items-center gap-3"><Layers size={20} className="text-[#FF6B35]"/> ECOSSISTEMA DE PRODUTIVIDADE</span>
                                <span className="flex items-center gap-3"><Brain size={20} className="text-[#FF6B35]"/> APRENDIZADO ACELERADO</span>
                                <span className="flex items-center gap-3"><Cpu size={20} className="text-[#FF6B35]"/> INTELIGÊNCIA ESTRATÉGICA</span>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            <StackSection checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
            <Testimonials />
            <FAQ />
            
            {/* Seção de Oferta Final */}
            <section id="offer" className="relative z-10 py-32 px-4">
                 <div className="max-w-4xl mx-auto text-center">
                    <Shield className="w-20 h-20 text-[#2DD4BF] mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        Se você não sentir que isso vale 10x o que você pagou, devolvemos 100% do seu dinheiro.
                    </p>
                    <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
                        <button className="bg-[#FF6B35] hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all hover:scale-105 cursor-pointer">
                            QUERO COMEÇAR AGORA MESMO
                        </button>
                    </a>
                 </div>
            </section>

        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
