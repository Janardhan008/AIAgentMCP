# AIAgentICP - Playwright Test Suite (Containerized)

Playwright end-to-end tests for the Automation Exercise demo e-commerce site,
fully containerized with Docker. No need to install Node.js, browsers, or any
dependencies on your machine.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (Docker Desktop on Windows/Mac, or the Docker Engine + Compose plugin on Linux)
- Docker daemon running

That's it. Nothing else to install.

## Run the tests (single command)

```bash
# Windows (cmd / PowerShell)
run-tests.cmd

# Linux / macOS
./run-tests.sh
```

Or run with any Playwright CLI arguments:

```bash
run-tests.cmd --project=chromium        # only Chromium
run-tests.cmd tests/blue-top-cart.spec.ts
./run-tests.sh --grep "checkout"
```

The first run builds the Docker image (downloads the Playwright base image and
browsers), which can take a few minutes. Subsequent runs are fast.

## What it does

- Uses the official `mcr.microsoft.com/playwright` image (Node + browsers + OS
  dependencies pre-installed).
- `docker compose build` assembles the image with your `package.json`
  dependencies.
- `docker compose run --rm` executes `npx playwright test` inside the container
  and removes the container afterwards.
- Test reports (`playwright-report/`) and results (`test-results/`) are written
  back to your local working directory via volumes, so you can open the HTML
  report locally.

## Alternative: manual compose commands

```bash
# Build the image
docker compose build

# Run all tests
docker compose run --rm playwright-tests

# Run a specific project
docker compose run --rm playwright-tests --project=chromium
```

## Reports

After a run, open the generated report:

```bash
# The HTML report is written to ./playwright-report
# Open index.html in your browser, e.g. on Windows:
start playwright-report\index.html
```

## Project structure

- `Dockerfile` - container definition based on the official Playwright image
- `docker-compose.yml` - single-service definition wiring volumes and the test command
- `run-tests.cmd` / `run-tests.sh` - one-command wrappers
- `playwright.config.ts` - Playwright configuration
- `tests/` - the end-to-end spec files
