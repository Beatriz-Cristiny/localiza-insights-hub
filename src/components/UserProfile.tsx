
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import BadgeCard from '@/components/BadgeCard';
import { User, MapPin, Calendar, Star, Award, Target, Trophy, Medal } from 'lucide-react';

interface UserProfileProps {
  userName: string;
  userEmail: string;
  userScore: number;
  joinDate: string;
}

const UserProfile = ({ userName, userEmail, userScore, joinDate }: UserProfileProps) => {
  // Mock data para badges - em uma aplicação real, viria da API
  const userBadges = [
    {
      title: 'Primeiro Passo',
      description: 'Complete seu primeiro perfil',
      icon: '🎯',
      earned: true,
      dateEarned: '15 de maio de 2025'
    },
    {
      title: 'Explorador',
      description: 'Analise 5 regiões diferentes',
      icon: '🗺️',
      earned: true,
      dateEarned: '18 de maio de 2025'
    },
    {
      title: 'Contribuidor',
      description: 'Adicione dados de 10 empresas',
      icon: '📊',
      earned: true,
      dateEarned: '20 de maio de 2025'
    },
    {
      title: 'Analista Expert',
      description: 'Realize 25 análises de mercado',
      icon: '🔍',
      earned: false,
      progress: 64,
      requirement: '16/25 análises completas'
    },
    {
      title: 'Mestre dos Dados',
      description: 'Contribua com dados de 50 empresas',
      icon: '💎',
      earned: false,
      progress: 30,
      requirement: '15/50 empresas adicionadas'
    },
    {
      title: 'Guru do NextBi',
      description: 'Alcance 1000 pontos',
      icon: '👑',
      earned: false,
      progress: 42,
      requirement: '425/1000 pontos'
    }
  ];

  const earnedBadges = userBadges.filter(badge => badge.earned);
  const inProgressBadges = userBadges.filter(badge => !badge.earned);

  const getUserLevel = (score: number) => {
    if (score >= 1000) return { name: 'Guru', color: 'text-brand-warning' };
    if (score >= 500) return { name: 'Expert', color: 'text-brand-success' };
    if (score >= 200) return { name: 'Explorador', color: 'text-brand-purple' };
    return { name: 'Iniciante', color: 'text-brand-dark' };
  };

  const userLevel = getUserLevel(userScore);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header do Perfil */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-purple mb-2">
          Meu Perfil
        </h2>
        <p className="text-brand-purple/70">
          Acompanhe seu progresso e conquistas no NextBi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informações do Usuário */}
        <Card className="bg-gradient-to-br from-brand-purple to-brand-dark text-brand-light lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-brand-light text-brand-purple text-2xl">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{userName}</CardTitle>
            <p className="text-brand-light/80 text-sm">{userEmail}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Nível</span>
              <Badge variant="secondary" className={`bg-brand-light ${userLevel.color}`}>
                {userLevel.name}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pontos</span>
              <span className="font-bold">{userScore}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Badges</span>
              <span className="font-bold">{earnedBadges.length}/{userBadges.length}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm pt-2 border-t border-brand-light/20">
              <Calendar className="w-4 h-4" />
              <span>Membro desde {joinDate}</span>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-brand-light text-brand-purple hover:bg-brand-light/90 mt-4"
            >
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Badges Conquistados */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-purple">
                <Trophy className="w-5 h-5 mr-2" />
                Badges Conquistados ({earnedBadges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {earnedBadges.map((badge, index) => (
                  <BadgeCard key={index} {...badge} />
                ))}
              </div>
              {earnedBadges.length === 0 && (
                <div className="text-center py-8 text-brand-purple/60">
                  <Medal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum badge conquistado ainda</p>
                  <p className="text-sm">Continue explorando para ganhar seus primeiros badges!</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Badges em Progresso */}
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-purple">
                <Target className="w-5 h-5 mr-2" />
                Próximos Objetivos ({inProgressBadges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inProgressBadges.map((badge, index) => (
                  <BadgeCard key={index} {...badge} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
