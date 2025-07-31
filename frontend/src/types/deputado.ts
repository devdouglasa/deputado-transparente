export interface Deputado {
  id: string;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
  sexo: string;
  dataNascimento: string;
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