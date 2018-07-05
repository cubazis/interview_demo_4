#!/usr/bin/env bash
docker ps -a | xargs --no-run-if-empty docker rm

docker images | xargs --no-run-if-empty docker rmi

docker volume ls -qf dangling=true | xargs --no-run-if-empty docker volume rm

docker ps -a

docker images

sudo rm -rf ./db/*