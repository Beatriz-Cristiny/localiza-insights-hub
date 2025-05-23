
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Activity, Award, Star } from 'lucide-react';

interface DashboardProps {
  userName: string;
  userScore: number;
}

const Dashboard = ({ userName, userScore }: DashboardProps) => {
  const nextRewardThreshold = 1000;
  const progressToNextReward = (userScore / nextRewardThreshold) * 100;
  
  // Mock user activities - in a real app, these would come from an API or database
  const recentActivities = [
    { id: 1, type: 'contribution', description: 'Adicionou dados de uma empresa', points: 50, date: '2025-05-22' },
    { id: 2, type: 'analysis', description: 'Analisou a região Centro', points: 30, date: '2025-05-21' },
    { id: 3, type: 'profile', description: 'Completou perfil', points: 20, date: '2025-05-20' },
    { id: 4, type: 'contribution', description: 'Adicionou dados de uma empresa', points: 50, date: '2025-05-19' },
  ];

  // Function to get activity icon
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'contribution':
        return <Star className="h-4 w-4 text-brand-warning" />;
      case 'analysis':
        return <Activity className="h-4 w-4 text-brand-success" />;
      case 'profile':
        return <Award className="h-4 w-4 text-brand-purple" />;
      default:
        return <Activity className="h-4 w-4 text-brand-purple" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-purple mb-2">
          Olá, {userName}! 👋
        </h2>
        <p className="text-brand-purple/70">
          Aqui está um resumo da sua pontuação e atividades recentes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gamification Card */}
        <Card className="bg-gradient-to-br from-brand-purple to-brand-dark text-brand-light">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Sua Pontuação
              <Badge variant="secondary" className="bg-brand-light text-brand-purple">
                Nível Explorador
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">{userScore} pontos</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Próxima recompensa</span>
                <span>{nextRewardThreshold - userScore} pontos</span>
              </div>
              <Progress 
                value={progressToNextReward} 
                className="bg-brand-dark"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold">Contribuições</div>
                <div className="text-brand-light/80">12 dados</div>
              </div>
              <div>
                <div className="font-semibold">Análises</div>
                <div className="text-brand-light/80">8 regiões</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-white shadow-lg border-0 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-brand-purple">Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map(activity => (
              <div 
                key={activity.id} 
                className="flex items-center justify-between p-3 border-b border-brand-purple/10 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-light rounded-lg">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div>
                    <p className="font-medium text-brand-purple">{activity.description}</p>
                    <p className="text-xs text-brand-purple/60">{activity.date}</p>
                  </div>
                </div>
                <Badge className="bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">
                  +{activity.points} pts
                </Badge>
              </div>
            ))}
            
            <button className="mt-2 w-full text-center text-sm font-medium text-brand-purple hover:text-brand-purple/80 transition-colors">
              Ver todas as atividades
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
