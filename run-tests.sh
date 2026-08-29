#!/usr/bin/env bash
set -e

docker compose build -q
docker compose run --rm playwright-tests "$@"
