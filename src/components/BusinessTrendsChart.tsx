
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowDown, ArrowUp } from 'lucide-react';

// Mock data for business openings and closures over 5 years
const businessData = [
  { year: '2020', opened: 42, closed: 28 },
  { year: '2021', opened: 53, closed: 35 },
  { year: '2022', opened: 67, closed: 31 },
  { year: '2023', opened: 78, closed: 25 },
  { year: '2024', opened: 91, closed: 22 },
];

const config = {
  opened: {
    label: 'Empresas Abertas',
    color: '#4ade80', // Success green color
    theme: {
      light: '#4ade80',
      dark: '#4ade80',
    },
  },
  closed: {
    label: 'Empresas Fechadas',
    color: '#f87171', // Danger red color
    theme: {
      light: '#f87171',
      dark: '#f87171',
    },
  },
};

const BusinessTrendsChart = () => {
  return (
    <Card className="bg-white shadow-lg border-0 mt-6">
      <CardHeader>
        <CardTitle className="flex items-center text-brand-purple">
          <span className="flex items-center gap-2">
            Tendências dos Últimos 5 Anos
            <span className="flex items-center gap-1 text-sm font-normal">
              <span className="flex items-center text-brand-success">
                <ArrowUp className="h-4 w-4" />Abertas
              </span>
              <span className="flex items-center text-brand-danger ml-3">
                <ArrowDown className="h-4 w-4" />Fechadas
              </span>
            </span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ChartContainer config={config}>
            <BarChart data={businessData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#310E4A', fontSize: 12 }}
                tickLine={{ stroke: '#310E4A' }}
              />
              <YAxis 
                tick={{ fill: '#310E4A', fontSize: 12 }}
                tickLine={{ stroke: '#310E4A' }}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <ChartTooltipContent
                        className="bg-white"
                        payload={payload}
                      />
                    );
                  }
                  return null;
                }}
              />
              <Legend
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: '10px' }}
              />
              <Bar 
                dataKey="opened" 
                name="Empresas Abertas" 
                fill="#4ade80" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="closed" 
                name="Empresas Fechadas" 
                fill="#f87171" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessTrendsChart;
