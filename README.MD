# Painel de Gastos Parlamentares

## Desafio de projeto Demander de consumo de API de deputados + automação de armazenamento de dados no banco com Queue Jobs no Laravel


### Tecnologias:


<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" /> &nbsp;&nbsp;&nbsp;&nbsp;
<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" /> &nbsp;&nbsp;&nbsp;&nbsp;
<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />&nbsp;&nbsp;&nbsp;&nbsp;
<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />&nbsp;&nbsp;&nbsp;&nbsp;
<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />&nbsp;&nbsp;&nbsp;&nbsp;
<img width=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
          
#

### Iniciando o projeto:
Docker Compose:
```
git clone https://github.com/devdouglasa/deputado-transparente.git
```
Entre na pasta do projeto:
```
cd deputado-transparente
```
Copie o arquivo .env:
```
cp backend/.env-example backend/.env
```
Configure o .env para o seu banco de dados:
```
DB_CONNECTION=mysql // se utilizar o sqlite, comente as linhas abaixo
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=root
```
Buildar a imagem docker:
```
docker-compose up -d --build
```


A primeira vez que iniciar irá demorar um pouco pois o banco de dados será sincronizado com a API da camara.

Link em produção: http://15.228.99.228/

#

### Desenvolvido por Douglas