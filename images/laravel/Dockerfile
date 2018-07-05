FROM php:7.2-fpm

MAINTAINER <grebenkin@phystech.edu>

RUN apt-get update \
    && apt-get install -y \
    curl \
    wget \
    git \
    libcurl4-openssl-dev \
    libicu-dev \
    libpq-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    mysql-client \
    && pecl install mcrypt-1.0.1 \
    && docker-php-ext-enable mcrypt \
    && docker-php-ext-install \
    json \
    mbstring \
    pdo \
    mysqli \
    && docker-php-ext-enable \
    json \
    mbstring \
    pdo \
    mysqli \
    && apt-get clean

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#ADD php.ini /usr/local/etc/php/conf.d/40-custom.ini

WORKDIR /var/www

#chown -R www-data:www-data backend
#chgrp -R www-data backend/storage
#chgrp -R www-data backend/bootstrap/cache
#chmod -R ug+rwx backend/storage
#chmod -R ug+rwx backend/bootstrap/cache

CMD ["php-fpm"]