
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { Region } from './types';

interface RegionDetailsProps {
  selectedRegion: Region | null;
}

const RegionDetails: React.FC<RegionDetailsProps> = ({ selectedRegion }) => {
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

  return (
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
  );
};

export default RegionDetails;
