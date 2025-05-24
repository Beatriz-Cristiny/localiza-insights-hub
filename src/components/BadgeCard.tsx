
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  dateEarned?: string;
  progress?: number;
  requirement?: string;
}

const BadgeCard = ({ title, description, icon, earned, dateEarned, progress, requirement }: BadgeCardProps) => {
  return (
    <Card className={`transition-all duration-200 ${earned ? 'bg-white shadow-lg border-brand-success/20' : 'bg-gray-50 border-gray-200'}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className={`text-3xl ${earned ? '' : 'grayscale opacity-50'}`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className={`font-semibold ${earned ? 'text-brand-purple' : 'text-gray-500'}`}>
                {title}
              </h3>
              {earned && (
                <Badge className="bg-brand-success/10 text-brand-success hover:bg-brand-success/20">
                  Conquistado
                </Badge>
              )}
            </div>
            <p className={`text-sm ${earned ? 'text-brand-purple/70' : 'text-gray-400'} mb-2`}>
              {description}
            </p>
            {earned && dateEarned && (
              <p className="text-xs text-brand-purple/50">
                Conquistado em {dateEarned}
              </p>
            )}
            {!earned && progress !== undefined && (
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progresso</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand-purple h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {requirement && (
                  <p className="text-xs text-gray-500 mt-1">{requirement}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BadgeCard;
