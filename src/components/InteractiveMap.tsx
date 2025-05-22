
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Filter, TrendingUp, TrendingDown } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { id: 1, name: 'Centro', x: 45, y: 30, risk: 'high', businesses: 234, closures: 45, sector: 'alimentacao' },
    { id: 2, name: 'Zona Sul', x: 60, y: 60, risk: 'medium', businesses: 156, closures: 12, sector: 'beleza' },
    { id: 3, name: 'Zona Norte', x: 35, y: 25, risk: 'low', businesses: 89, closures: 3, sector: 'saude' },
    { id: 4, name: 'Zona Oeste', x: 25, y: 45, risk: 'medium', businesses: 167, closures: 23, sector: 'alimentacao' },
    { id: 5, name: 'Zona Leste', x: 75, y: 40, risk: 'low', businesses: 98, closures: 8, sector: 'tecnologia' },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-brand-danger';
      case 'medium': return 'bg-brand-warning';
      case 'low': return 'bg-brand-success';
      default: return 'bg-brand-purple';
    }
  };

  const getRiskText = (risk: string) => {
    switch (risk) {
      case 'high': return 'Alto Risco';
      case 'medium': return 'Médio Risco';
      case 'low': return 'Baixo Risco';
      default: return 'Desconhecido';
    }
  };

  const filteredRegions = regions.filter(region => {
    if (selectedSector !== 'all' && region.sector !== selectedSector) return false;
    if (selectedRisk !== 'all' && region.risk !== selectedRisk) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-brand-purple mb-2">
          Mapa de Calor Interativo
        </h2>
        <p className="text-brand-purple/70">
          Explore dados de mercado por região e setor
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center text-brand-purple">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-brand-purple mb-2 block">
                Setor
              </label>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os setores" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os setores</SelectItem>
                  <SelectItem value="alimentacao">Alimentação</SelectItem>
                  <SelectItem value="beleza">Beleza</SelectItem>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-brand-purple mb-2 block">
                Nível de Risco
              </label>
              <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os níveis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os níveis</SelectItem>
                  <SelectItem value="low">Baixo Risco</SelectItem>
                  <SelectItem value="medium">Médio Risco</SelectItem>
                  <SelectItem value="high">Alto Risco</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-brand-purple mb-3">Legenda</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-brand-success rounded-full"></div>
                  <span className="text-sm text-brand-purple/70">Baixo Risco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-brand-warning rounded-full"></div>
                  <span className="text-sm text-brand-purple/70">Médio Risco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-brand-danger rounded-full"></div>
                  <span className="text-sm text-brand-purple/70">Alto Risco</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map */}
        <Card className="lg:col-span-2 bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-brand-purple">
              Visualização Regional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-brand-light to-white rounded-lg p-8 h-96">
              {filteredRegions.map((region) => (
                <div
                  key={region.id}
                  className={`absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${getRiskColor(region.risk)} animate-pulse-glow`}
                  style={{ 
                    left: `${region.x}%`, 
                    top: `${region.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-dark text-brand-light px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                    {region.name}
                  </div>
                </div>
              ))}
              
              {/* Grid overlay for better visualization */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            </div>
          </CardContent>
        </Card>

        {/* Region Details */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center text-brand-purple">
              <MapPin className="w-4 h-4 mr-2" />
              Detalhes da Região
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedRegion ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-purple text-lg">{selectedRegion.name}</h4>
                  <Badge className={`${getRiskColor(selectedRegion.risk)} text-white mt-1`}>
                    {getRiskText(selectedRegion.risk)}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-purple/70">Empresas Ativas</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-brand-success" />
                      <span className="font-medium text-brand-purple">{selectedRegion.businesses}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-purple/70">Fechamentos</span>
                    <div className="flex items-center space-x-1">
                      <TrendingDown className="w-4 h-4 text-brand-danger" />
                      <span className="font-medium text-brand-purple">{selectedRegion.closures}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-purple/70">Taxa de Falência</span>
                    <span className="font-medium text-brand-purple">
                      {Math.round((selectedRegion.closures / selectedRegion.businesses) * 100)}%
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-brand-light">
                  Ver Análise Completa
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <MapPin className="w-12 h-12 text-brand-purple/30 mx-auto mb-3" />
                <p className="text-brand-purple/60">
                  Clique em uma região no mapa para ver os detalhes
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
