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
  deputado_id: string;
  ano: string;
  mes: string;
  tipo_despesa: string;
  valor_documento: number;
  fornecedor: string;
  data_documento: string;
  num_documento: string;
}

export interface GastosDeputado {
  deputado: Deputado;
  despesas: Despesa[];
  totalGasto: number;
}