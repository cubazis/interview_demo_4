FROM php:7.2-fpm

MAINTAINER <grebenkin@phystech.edu>

RUN apt-get update \
    && apt-get install -y \
    libmcrypt-dev \
    mysql-client \
    && pecl install mcrypt-1.0.1 \
    && docker-php-ext-enable mcrypt \
    && docker-php-ext-install \
    json \
    mbstring \
    pdo \
    pdo_mysql \
    && apt-get clean

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www

RUN mkdir /var/www/backend
RUN mkdir /var/www/backend/storage
RUN mkdir /var/www/backend/bootstrap
RUN mkdir /var/www/backend/bootstrap/cache

RUN chown -R www-data:www-data /var/www/backend
RUN chgrp -R www-data /var/www/backend/storage /var/www/backend/bootstrap/cache
RUN chmod -R ug+rwx /var/www/backend/storage /var/www/backend/bootstrap/cache


CMD ["php-fpm"]