export interface Deputado {
  id: string;
  nome: string;
  sigla_partido: string;
  sigla_uf: string;
  url_foto: string;
  sexo: string;
  data_nascimento: string;
}

export interface Despesa {
  id: string;
  tipoDespesa: string;
  valor: number;
  fornecedor: string;
  dataDocumento: string;
  numeroDocumento: string;
}

export interface GastosDeputado {
  deputado: Deputado;
  despesas: Despesa[];
  totalGasto: number;
}