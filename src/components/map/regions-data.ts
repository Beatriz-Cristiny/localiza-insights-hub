
import { Region } from './types';

export const regionsData: Region[] = [
  { id: 1, name: 'Centro', x: 45, y: 30, risk: 'high', businesses: 234, closures: 45, sector: 'alimentacao' },
  { id: 2, name: 'Zona Sul', x: 60, y: 60, risk: 'medium', businesses: 156, closures: 12, sector: 'beleza' },
  { id: 3, name: 'Zona Norte', x: 35, y: 25, risk: 'low', businesses: 89, closures: 3, sector: 'saude' },
  { id: 4, name: 'Zona Oeste', x: 25, y: 45, risk: 'medium', businesses: 167, closures: 23, sector: 'alimentacao' },
  { id: 5, name: 'Zona Leste', x: 75, y: 40, risk: 'low', businesses: 98, closures: 8, sector: 'tecnologia' },
];
