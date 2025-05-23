
import React, { useState } from 'react';
import Filters from './map/Filters';
import RegionMap from './map/RegionMap';
import RegionDetails from './map/RegionDetails';
import BusinessTrendsChart from './BusinessTrendsChart';
import { regionsData } from './map/regions-data';
import { Region } from './map/types';

const InteractiveMap = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const filteredRegions = regionsData.filter(region => {
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
        {/* Filters Component */}
        <Filters 
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
          selectedRisk={selectedRisk}
          setSelectedRisk={setSelectedRisk}
        />

        {/* Map Component */}
        <RegionMap 
          regions={filteredRegions} 
          setSelectedRegion={setSelectedRegion} 
        />

        {/* Region Details Component */}
        <RegionDetails selectedRegion={selectedRegion} />
      </div>

      {/* Business Trends Chart */}
      <BusinessTrendsChart />
    </div>
  );
};

export default InteractiveMap;
