# Usa uma imagem base do Node para a etapa de build
FROM node:18-alpine as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração de dependências
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Executa o build da aplicação React
RUN npm run build

# Usa uma imagem base do Nginx para servir a aplicação
FROM nginx:alpine

# Copia a configuração do Nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos gerados pelo build para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]