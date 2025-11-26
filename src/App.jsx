// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'

// Importações Críticas (Direct Import)
import Header from './components/Header'
import Hero from './components/Hero'

// Importações Lazy (Só carrega o código quando necessário)
const Ecosystem = lazy(() => import('./components/Ecosystem')); // Você precisa criar este arquivo com o código da seção Ecosystem
const PainSection = lazy(() => import('./components/PainSection')); // Você precisa criar este arquivo
const BentoGrid = lazy(() => import('./components/BentoGrid'));
const StackSection = lazy(() => import('./components/StackSection')); // Você precisa criar este arquivo
const Testimonials = lazy(() => import('./components/Testimonials')); // Você precisa criar este arquivo
const FAQ = lazy(() => import('./components/FAQ')); // Você precisa criar este arquivo
const Footer = lazy(() => import('./components/Footer')); // Você precisa criar este arquivo

// Constante Global
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";

// Pixel Tracking
const handleTrackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

function App() {
  // Cores CSS Variables podem ser definidas no CSS global, mas mantemos as constantes aqui se precisar passar via prop
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[#FF4F1F] selection:text-white">
      
      <Header checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
      
      {/* Background Dinâmico - Mantido aqui pois é global */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#2DD4BF]/10 rounded-full blur-[120px] animate-pulse-slow will-change-transform"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[100px] animate-pulse-slow will-change-transform" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>

      <main>
        <Hero checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />

        {/* Suspense envolve tudo que não é dobra principal */}
        <Suspense fallback={<div className="h-40 w-full flex items-center justify-center text-[#2DD4BF]">Carregando Nexus...</div>}>
            
            {/* Componentes separados */}
            {/* Nota: Para o código funcionar, você deve criar os arquivos Ecosystem.jsx, etc. com o código original correspondente */}
            <Ecosystem /> 
            
            <PainSection />
            
            <BentoGrid checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
            
            {/* Faixa Intermediária - Pode ser um componente pequeno ou ficar aqui se for muito simples */}
            <div className="relative z-20 py-6 overflow-hidden bg-[#0A0A0A] border-y border-[#333]">
                {/* ... código da faixa ... */}
            </div>

            <StackSection checkoutLink={CHECKOUT_LINK} onTrack={handleTrackCheckout} />
            
            <Testimonials />
            
            <FAQ />
            
            {/* Offer Section pode ser um componente separado também */}
            <section id="offer" className="relative z-10 py-32 px-4">
                 {/* ... código da seção de oferta final ... */}
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
