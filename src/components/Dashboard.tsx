
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, MapPin, AlertTriangle } from 'lucide-react';

interface DashboardProps {
  userName: string;
  userScore: number;
}

const Dashboard = ({ userName, userScore }: DashboardProps) => {
  const nextRewardThreshold = 1000;
  const progressToNextReward = (userScore / nextRewardThreshold) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-purple mb-2">
          Olá, {userName}! 👋
        </h2>
        <p className="text-brand-purple/70">
          Aqui está um resumo das principais informações de mercado
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-purple">
              Empresas Ativas
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-brand-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-purple">2,847</div>
            <p className="text-xs text-brand-success">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-purple">
              Empresas Fechadas
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-brand-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-purple">342</div>
            <p className="text-xs text-brand-danger">
              +8% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-purple">
              Áreas Analisadas
            </CardTitle>
            <MapPin className="h-4 w-4 text-brand-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-purple">156</div>
            <p className="text-xs text-brand-purple/60">
              Regiões mapeadas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-brand-purple">
              Taxa Média de Risco
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-brand-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-brand-purple">23%</div>
            <p className="text-xs text-brand-warning">
              Médio risco na região
            </p>
          </CardContent>
        </Card>
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

        {/* Risk Alerts */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-brand-purple">Alertas de Risco</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-danger rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-brand-purple">Centro - Alimentação</p>
                  <p className="text-sm text-brand-purple/60">Alta taxa de falência (45%)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-warning rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-brand-purple">Zona Sul - Beleza</p>
                  <p className="text-sm text-brand-purple/60">Saturação do mercado</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-brand-purple">Zona Norte - Saúde</p>
                  <p className="text-sm text-brand-purple/60">Boa oportunidade</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-brand-purple">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-colors">
              <div className="font-medium text-brand-purple">Explorar Mapa</div>
              <div className="text-sm text-brand-purple/60">Visualizar dados por região</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-colors">
              <div className="font-medium text-brand-purple">Contribuir Dados</div>
              <div className="text-sm text-brand-purple/60">Ganhe +50 pontos</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-colors">
              <div className="font-medium text-brand-purple">Gerar Relatório</div>
              <div className="text-sm text-brand-purple/60">Análise personalizada</div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
