# Interview Demo App
___

## nginx

nginx: docker container serve folders from www

clear_containers.sh script for total containers and images destruction
___

## react

client: node docker container for development of frontend

context from ./www/frontend

dev container (client) lives on 3000 port

static react build lives on 8000 port (build/ folder added in case it is demonstration project)
___

## php

php: php-fpm docker container for development of backend

volume from ./www/backend

php container lives on 8000 port (internal port is 9000)
___