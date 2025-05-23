
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Region } from './types';

interface RegionMapProps {
  regions: Region[];
  setSelectedRegion: (region: Region) => void;
}

const RegionMap: React.FC<RegionMapProps> = ({ regions, setSelectedRegion }) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-brand-danger';
      case 'medium': return 'bg-brand-warning';
      case 'low': return 'bg-brand-success';
      default: return 'bg-brand-purple';
    }
  };

  return (
    <Card className="lg:col-span-2 bg-white shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-brand-purple">
          Visualização Regional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-brand-light to-white rounded-lg p-8 h-96">
          {regions.map((region) => (
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
  );
};

export default RegionMap;
