@echo off
REM Run Playwright tests in a Docker container (Windows / cmd)
docker compose build -q
docker compose run --rm playwright-tests %*
