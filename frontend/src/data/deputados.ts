import { Deputado, Despesa, GastosDeputado } from '@/types/deputado';

export const deputados: Deputado[] = [
  {
    id: '1',
    nome: 'Maria Santos Silva',
    sigla_partido: 'PT',
    sigla_uf: 'SP',
    url_foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b502?w=150&h=150&fit=crop&crop=face',
    sexo: 'F',
    data_nascimento: '1975-03-15'
  },
  {
    id: '2',
    nome: 'João Carlos Oliveira',
    sigla_partido: 'PSDB',
    sigla_uf: 'RJ',
    url_foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    sexo: 'M',
    data_nascimento: '1968-08-22'
  },
  {
    id: '3',
    nome: 'Ana Paula Ferreira',
    sigla_partido: 'PDT',
    sigla_uf: 'MG',
    url_foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    sexo: 'F',
    data_nascimento: '1982-11-08'
  },
  {
    id: '4',
    nome: 'Roberto Lima Costa',
    sigla_partido: 'PL',
    sigla_uf: 'RS',
    url_foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    sexo: 'M',
    data_nascimento: '1971-05-30'
  },
  {
    id: '5',
    nome: 'Fernanda Almeida',
    sigla_partido: 'PSOL',
    sigla_uf: 'BA',
    url_foto: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
    sexo: 'F',
    data_nascimento: '1979-12-03'
  },
  {
    id: '6',
    nome: 'Carlos Eduardo Souza',
    sigla_partido: 'MDB',
    sigla_uf: 'PR',
    url_foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    sexo: 'M',
    data_nascimento: '1965-01-18'
  }
];

export const gastosDeputados: Record<string, GastosDeputado> = {
  '1': {
    deputado: deputados[0],
    totalGasto: 45280.50,
    despesas: [
      {
        id: '1-1',
        tipoDespesa: 'Passagens Aéreas',
        valor: 12500.00,
        fornecedor: 'GOL Linhas Aéreas',
        dataDocumento: '2024-01-15',
        numeroDocumento: 'DOC001'
      },
      {
        id: '1-2',
        tipoDespesa: 'Hospedagem',
        valor: 8900.50,
        fornecedor: 'Hotel Brasília Palace',
        dataDocumento: '2024-01-20',
        numeroDocumento: 'DOC002'
      },
      {
        id: '1-3',
        tipoDespesa: 'Alimentação',
        valor: 5680.00,
        fornecedor: 'Restaurante do Congresso',
        dataDocumento: '2024-02-01',
        numeroDocumento: 'DOC003'
      },
      {
        id: '1-4',
        tipoDespesa: 'Combustível',
        valor: 3200.00,
        fornecedor: 'Posto Ipiranga',
        dataDocumento: '2024-02-10',
        numeroDocumento: 'DOC004'
      },
      {
        id: '1-5',
        tipoDespesa: 'Material de Escritório',
        valor: 15000.00,
        fornecedor: 'Papelaria Central',
        dataDocumento: '2024-02-15',
        numeroDocumento: 'DOC005'
      }
    ]
  },
  '2': {
    deputado: deputados[1],
    totalGasto: 62150.75,
    despesas: [
      {
        id: '2-1',
        tipoDespesa: 'Passagens Aéreas',
        valor: 18750.00,
        fornecedor: 'LATAM Airlines',
        dataDocumento: '2024-01-10',
        numeroDocumento: 'DOC006'
      },
      {
        id: '2-2',
        tipoDespesa: 'Hospedagem',
        valor: 12400.75,
        fornecedor: 'Hotel Nacional',
        dataDocumento: '2024-01-25',
        numeroDocumento: 'DOC007'
      },
      {
        id: '2-3',
        tipoDespesa: 'Consultoria',
        valor: 25000.00,
        fornecedor: 'Consultoria Política Ltda',
        dataDocumento: '2024-02-05',
        numeroDocumento: 'DOC008'
      },
      {
        id: '2-4',
        tipoDespesa: 'Alimentação',
        valor: 6000.00,
        fornecedor: 'Diversos Restaurantes',
        dataDocumento: '2024-02-20',
        numeroDocumento: 'DOC009'
      }
    ]
  },
  '3': {
    deputado: deputados[2],
    totalGasto: 38920.25,
    despesas: [
      {
        id: '3-1',
        tipoDespesa: 'Passagens Aéreas',
        valor: 15200.00,
        fornecedor: 'Azul Linhas Aéreas',
        dataDocumento: '2024-01-08',
        numeroDocumento: 'DOC010'
      },
      {
        id: '3-2',
        tipoDespesa: 'Hospedagem',
        valor: 9720.25,
        fornecedor: 'Hotel Alvorada',
        dataDocumento: '2024-01-15',
        numeroDocumento: 'DOC011'
      },
      {
        id: '3-3',
        tipoDespesa: 'Material de Escritório',
        valor: 8000.00,
        fornecedor: 'Office Solutions',
        dataDocumento: '2024-02-01',
        numeroDocumento: 'DOC012'
      },
      {
        id: '3-4',
        tipoDespesa: 'Combustível',
        valor: 6000.00,
        fornecedor: 'Shell Select',
        dataDocumento: '2024-02-12',
        numeroDocumento: 'DOC013'
      }
    ]
  }
};