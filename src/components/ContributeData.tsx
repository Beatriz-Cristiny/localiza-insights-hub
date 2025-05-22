
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Gift, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ContributeDataProps {
  onPointsEarned: (points: number) => void;
}

const ContributeData = ({ onPointsEarned }: ContributeDataProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    sector: '',
    address: '',
    status: '',
    openDate: '',
    closeDate: '',
    reason: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const pointsEarned = formData.status === 'fechado' ? 75 : 50;
    
    onPointsEarned(pointsEarned);
    setSubmitted(true);
    setIsSubmitting(false);

    toast({
      title: "Dados enviados com sucesso!",
      description: `Você ganhou ${pointsEarned} pontos pela contribuição.`,
    });

    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        businessName: '',
        sector: '',
        address: '',
        status: '',
        openDate: '',
        closeDate: '',
        reason: '',
        notes: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-brand-success/10 to-brand-success/5 border-brand-success/20">
          <CardContent className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-brand-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-purple mb-2">
              Obrigado pela contribuição!
            </h3>
            <p className="text-brand-purple/70 mb-6">
              Seus dados foram enviados e estão sendo processados pela nossa equipe.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-5 h-5 text-brand-success" />
              <span className="text-brand-success font-semibold">
                +50 pontos adicionados à sua conta
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-brand-purple mb-2">
          Contribuir com Dados
        </h2>
        <p className="text-brand-purple/70">
          Ajude nossa comunidade compartilhando informações sobre negócios da sua região
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incentives */}
        <Card className="bg-gradient-to-br from-brand-purple to-brand-dark text-brand-light">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="w-5 h-5 mr-2" />
              Recompensas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Empresa ativa</span>
                <Badge className="bg-brand-light text-brand-purple">+50 pts</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Empresa fechada</span>
                <Badge className="bg-brand-light text-brand-purple">+75 pts</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Dados detalhados</span>
                <Badge className="bg-brand-light text-brand-purple">+25 pts</Badge>
              </div>
            </div>
            
            <div className="pt-4 border-t border-brand-light/20">
              <p className="text-sm text-brand-light/80">
                💡 Dica: Informações sobre fechamentos são especialmente valiosas!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card className="lg:col-span-2 bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center text-brand-purple">
              <Plus className="w-5 h-5 mr-2" />
              Adicionar Informação de Negócio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Nome do Negócio *</Label>
                  <Input
                    id="businessName"
                    placeholder="Ex: Restaurante do João"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sector">Setor *</Label>
                  <Select 
                    value={formData.sector} 
                    onValueChange={(value) => handleInputChange('sector', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o setor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alimentacao">Alimentação</SelectItem>
                      <SelectItem value="beleza">Beleza</SelectItem>
                      <SelectItem value="saude">Saúde</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="varejo">Varejo</SelectItem>
                      <SelectItem value="servicos">Serviços</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço *</Label>
                <Input
                  id="address"
                  placeholder="Rua, número, bairro, cidade"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status Atual *</Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(value) => handleInputChange('status', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Status do negócio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="fechado">Fechado</SelectItem>
                      <SelectItem value="transferido">Transferido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="openDate">Data de Abertura</Label>
                  <Input
                    id="openDate"
                    type="date"
                    value={formData.openDate}
                    onChange={(e) => handleInputChange('openDate', e.target.value)}
                  />
                </div>
              </div>

              {formData.status === 'fechado' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="closeDate">Data de Fechamento</Label>
                    <Input
                      id="closeDate"
                      type="date"
                      value={formData.closeDate}
                      onChange={(e) => handleInputChange('closeDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Motivo do Fechamento</Label>
                    <Select 
                      value={formData.reason} 
                      onValueChange={(value) => handleInputChange('reason', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixas-vendas">Baixas vendas</SelectItem>
                        <SelectItem value="alta-concorrencia">Alta concorrência</SelectItem>
                        <SelectItem value="problemas-financeiros">Problemas financeiros</SelectItem>
                        <SelectItem value="mudanca-proprietario">Mudança de proprietário</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="notes">Observações Adicionais</Label>
                <Textarea
                  id="notes"
                  placeholder="Qualquer informação adicional relevante..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-brand-purple/90 text-brand-light"
                disabled={isSubmitting || !formData.businessName || !formData.sector || !formData.address || !formData.status}
              >
                {isSubmitting ? 'Enviando...' : 'Contribuir com Dados'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContributeData;
