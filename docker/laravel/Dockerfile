FROM php:8.0-fpm

# Install necessary system packages
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www


# パーミッションの設定
#RUN chown -R www-data:www-data /var/www
#RUN chmod -R 755 /var/www/storage

# Composerのオートローダーの生成
#RUN composer dump-autoload
