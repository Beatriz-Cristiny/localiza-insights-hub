
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedRisk: string;
  setSelectedRisk: (risk: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedSector,
  setSelectedSector,
  selectedRisk,
  setSelectedRisk,
}) => {
  return (
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
  );
};

export default Filters;
