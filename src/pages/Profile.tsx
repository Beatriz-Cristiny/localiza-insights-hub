
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import LoginModal from '@/components/LoginModal';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // Mock user data - em uma aplicação real, viria do contexto de autenticação
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({ 
    name: 'João Silva', 
    email: 'joao.silva@email.com', 
    score: 425 
  });

  const handleLogin = (email: string, name: string) => {
    setUser({ name, email, score: 425 });
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  // Redirecionar para home se não estiver logado
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-light">
      <Header 
        onLoginClick={() => setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={user.name}
        userScore={user.score}
      />
      
      <UserProfile 
        userName={user.name}
        userEmail={user.email}
        userScore={user.score}
        joinDate="maio de 2025"
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Profile;
