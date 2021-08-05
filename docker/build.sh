#!/bin/bash

set -e

IMAGE_NAME="starcoin-event-api"
IMAGE_LATEST_TAG=$IMAGE_NAME:latest

echo "=== Building  image ${IMAGE_LATEST_TAG} ==="
docker build --no-cache -t $IMAGE_LATEST_TAG ../
echo "=== Building done ==="
