import { DeputadoCard } from '@/components/DeputadoCard';
import { deputados } from '@/data/deputados';
import { Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const deputadosFiltrados = deputados.filter(deputado =>
    deputado.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deputado.siglaPartido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deputado.siglaUf.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Resetar página ao filtrar
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Calcular paginação
  const totalPages = Math.ceil(deputadosFiltrados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const deputadosPaginados = deputadosFiltrados.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-info text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-12 h-12" />
              <h1 className="text-4xl font-bold">Painel de Gastos dos Deputados</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">
              Transparência e acompanhamento dos gastos públicos
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por nome, partido ou UF..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Deputados ({deputadosFiltrados.length})
          </h2>
          <p className="text-muted-foreground">
            Clique em "Ver Gastos" para visualizar o detalhamento das despesas de cada deputado
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {deputadosPaginados.map((deputado) => (
            <DeputadoCard key={deputado.id} deputado={deputado} />
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {deputadosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum deputado encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os termos da sua busca
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
