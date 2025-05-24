
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
import InteractiveMap from '@/components/InteractiveMap';
import ContributeData from '@/components/ContributeData';

const Index = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', score: 0 });
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogin = (email: string, name: string) => {
    setUser({ name, email, score: 425 });
    setIsLoggedIn(true);
  };

  const handlePointsEarned = (points: number) => {
    setUser(prev => ({ ...prev, score: prev.score + points }));
  };

  const renderActiveSection = () => {
    if (!isLoggedIn) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-brand-purple via-brand-dark to-brand-purple flex items-center justify-center">
          <div className="text-center text-brand-light max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <div className="w-20 h-20 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-brand-purple">NB</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Next<span className="text-brand-warning">Bi</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-light/80 mb-8">
                Descubra o melhor local para seu negócio com inteligência de dados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold mb-2">Análise de Mercado</h3>
                <p className="text-brand-light/70">
                  Dados completos sobre abertura e fechamento de empresas por região
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="text-lg font-semibold mb-2">Mapa Interativo</h3>
                <p className="text-brand-light/70">
                  Visualize riscos e oportunidades através do nosso mapa de calor
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Insights Precisos</h3>
                <p className="text-brand-light/70">
                  Recomendações baseadas em dados reais do mercado
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-brand-light text-brand-purple px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-light/90 transition-colors shadow-lg"
            >
              Começar Análise Gratuita
            </button>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'dashboard':
        return <Dashboard userName={user.name} userScore={user.score} />;
      case 'map':
        return <InteractiveMap />;
      case 'contribute':
        return <ContributeData onPointsEarned={handlePointsEarned} />;
      default:
        return <Dashboard userName={user.name} userScore={user.score} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light">
      {isLoggedIn && (
        <>
          <Header 
            onLoginClick={() => setIsLoginModalOpen(true)}
            isLoggedIn={isLoggedIn}
            userName={user.name}
            userScore={user.score}
          />
          
          {/* Navigation Tabs */}
          <div className="border-b border-brand-purple/10 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
            <div className="container mx-auto px-4">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeSection === 'dashboard'
                      ? 'border-brand-purple text-brand-purple'
                      : 'border-transparent text-brand-purple/60 hover:text-brand-purple'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveSection('map')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeSection === 'map'
                      ? 'border-brand-purple text-brand-purple'
                      : 'border-transparent text-brand-purple/60 hover:text-brand-purple'
                  }`}
                >
                  Mapa Interativo
                </button>
                <button
                  onClick={() => setActiveSection('contribute')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeSection === 'contribute'
                      ? 'border-brand-purple text-brand-purple'
                      : 'border-transparent text-brand-purple/60 hover:text-brand-purple'
                  }`}
                >
                  Contribuir
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="py-4 px-2 border-b-2 border-transparent text-brand-purple/60 hover:text-brand-purple font-medium text-sm transition-colors"
                >
                  Perfil
                </button>
              </nav>
            </div>
          </div>
        </>
      )}

      {renderActiveSection()}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
