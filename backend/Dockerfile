# Usa uma imagem base com PHP e Apache
FROM php:8.2-apache

# Define o diretório de trabalho dentro do container
WORKDIR /var/www/html

# Instala extensões PHP necessárias para o Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libzip-dev \
    unzip \
    ca-certificates \
    && docker-php-ext-install pdo_mysql gd exif opcache \
    && a2enmod rewrite

# Instala o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia os arquivos do seu projeto Laravel para o container
COPY . .

# Copia o certificado para o container
COPY ./docker/ssl/cacert.pem /usr/local/share/ca-certificates/cacert.pem

# Atualiza a lista de certificados para incluir o novo
RUN update-ca-certificates

# Instala as dependências do Laravel
RUN composer install --no-dev --optimize-autoloader

# Configura o Virtual Host do Apache
COPY ./docker/vhost.conf /etc/apache2/sites-available/000-default.conf

# Atualiza permissões das pastas
RUN chmod -R 777 /var/www/html/storage \
    && chmod -R 777 /var/www/html/bootstrap/cache

# Expõe a porta 80
EXPOSE 80