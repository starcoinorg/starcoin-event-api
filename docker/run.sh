#!/bin/bash
CURDIR=$(cd "$(dirname "$0")"; pwd)
docker run -d --name starcoin-event-api -p 3333:3333  -e "STARCOIN_EVENT_MYSQL_HOST=${STARCOIN_EVENT_MYSQL_HOST}" -e "STARCOIN_EVENT_MYSQL_USER=${STARCOIN_EVENT_MYSQL_USER}" -e "STARCOIN_EVENT_MYSQL_PWD=${STARCOIN_EVENT_MYSQL_PWD}"  -e "STARCOIN_EVENT_MYSQL_DB=${STARCOIN_EVENT_MYSQL_DB}" starcoin-event-api:latest

docker ps


