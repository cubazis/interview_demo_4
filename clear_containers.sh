#!/usr/bin/env bash
docker ps -a | xargs --no-run-if-empty docker rm

docker images | xargs --no-run-if-empty docker rmi

docker ps -a

docker images