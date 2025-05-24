
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
  userScore?: number;
}

const Header = ({ onLoginClick, isLoggedIn, userName, userScore }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-brand-purple/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-dark rounded-lg flex items-center justify-center">
              <span className="text-brand-light font-bold text-sm">NB</span>
            </div>
            <h1 className="text-xl font-bold text-brand-purple">NextBi</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-brand-purple/70 hover:text-brand-purple transition-colors">
              Dashboard
            </a>
            <a href="#map" className="text-brand-purple/70 hover:text-brand-purple transition-colors">
              Mapa
            </a>
            <a href="#analytics" className="text-brand-purple/70 hover:text-brand-purple transition-colors">
              Análises
            </a>
            <a href="#contribute" className="text-brand-purple/70 hover:text-brand-purple transition-colors">
              Contribuir
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="text-brand-purple">
                  <Search className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-brand-purple relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-warning rounded-full"></span>
                </Button>
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/profile')}>
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-brand-purple">{userName}</p>
                    <p className="text-xs text-brand-purple/60">{userScore} pontos</p>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-brand-purple text-brand-light">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </>
            ) : (
              <Button 
                onClick={onLoginClick}
                className="bg-brand-purple hover:bg-brand-purple/90 text-brand-light"
              >
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
