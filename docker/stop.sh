#!/bin/bash

echo "=== container stopping ==="
docker stop starcoin-event-api
docker rm  starcoin-event-api
echo "=== container stopped ==="