#!/bin/bash

# Container helper script for Sayur Lokal
# Supports both Docker and Podman

# Make script executable with: chmod +x docker.sh
# Then run with: ./docker.sh [command]

# Set colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Container engine command (docker or podman)
CONTAINER_ENGINE=""

# Display help message
show_help() {
  echo -e "${YELLOW}Sayur Lokal Container Helper${NC}"
  echo ""
  echo "Usage: ./docker.sh [command]"
  echo ""
  echo "Commands:"
  echo "  build       Build the container image"
  echo "  run         Run the container (detached)"
  echo "  start       Build and run the container (detached)"
  echo "  stop        Stop the running container"
  echo "  logs        Show container logs (follow mode)"
  echo "  shell       Open a shell in the running container"
  echo "  compose-up  Start with docker/podman-compose (detached)"
  echo "  compose-down Stop compose services"
  echo "  help        Show this help message"
  echo ""
  echo "Note: This script will use Docker if available, otherwise it will fall back to Podman."
  echo ""
}

# Determine which container engine to use
detect_container_engine() {
  if command -v docker &> /dev/null; then
    CONTAINER_ENGINE="docker"
    echo -e "${GREEN}Using Docker as container engine${NC}"
    return 0
  elif command -v podman &> /dev/null; then
    CONTAINER_ENGINE="podman"
    echo -e "${YELLOW}Docker not found, using Podman as fallback${NC}"
    return 0
  else
    echo -e "${RED}Error: Neither Docker nor Podman is installed or in PATH${NC}"
    echo "Please install Docker: https://docs.docker.com/get-docker/"
    echo "Or Podman: https://podman.io/getting-started/installation"
    exit 1
  fi
}

# Build the container image
build_image() {
  echo -e "${GREEN}Building container image...${NC}"
  
  # Check if .env file exists
  if [ -f .env ]; then
    echo -e "${YELLOW}Using environment variables from .env file${NC}"
    # Extract NEXT_PUBLIC_ variables from .env file
    ENV_ARGS=$(grep "^NEXT_PUBLIC_" .env | sed 's/^/--build-arg /' | tr '\n' ' ')
    $CONTAINER_ENGINE build $ENV_ARGS -t sayur-lokal .
  else
    echo -e "${YELLOW}No .env file found. Building without environment variables.${NC}"
    echo -e "${YELLOW}Note: Client-side environment variables will not be available.${NC}"
    $CONTAINER_ENGINE build -t sayur-lokal .
  fi
}

# Run the container
run_container() {
  echo -e "${GREEN}Running container...${NC}"
  $CONTAINER_ENGINE run -d -p 3000:3000 --name sayur-lokal-app sayur-lokal
  echo -e "${GREEN}Container started! Access the app at:${NC} http://localhost:3000"
}

# Stop the container
stop_container() {
  echo -e "${YELLOW}Stopping container...${NC}"
  $CONTAINER_ENGINE stop sayur-lokal-app
  $CONTAINER_ENGINE rm sayur-lokal-app
}

# Show container logs
show_logs() {
  echo -e "${GREEN}Showing logs (Ctrl+C to exit)...${NC}"
  $CONTAINER_ENGINE logs -f sayur-lokal-app
}

# Open shell in container
open_shell() {
  echo -e "${GREEN}Opening shell in container...${NC}"
  $CONTAINER_ENGINE exec -it sayur-lokal-app /bin/sh
}

# Handle compose operations
get_compose_command() {
  if [ "$CONTAINER_ENGINE" = "docker" ]; then
    echo "docker-compose"
  else
    # Check if podman-compose exists, otherwise try podman compose (newer versions)
    if command -v podman-compose &> /dev/null; then
      echo "podman-compose"
    else
      echo "podman compose"
    fi
  fi
}

# Start with compose
compose_up() {
  COMPOSE_CMD=$(get_compose_command)
  echo -e "${GREEN}Starting with $COMPOSE_CMD...${NC}"
  $COMPOSE_CMD up -d
  echo -e "${GREEN}Services started! Access the app at:${NC} http://localhost:3000"
}

# Stop compose services
compose_down() {
  COMPOSE_CMD=$(get_compose_command)
  echo -e "${YELLOW}Stopping $COMPOSE_CMD services...${NC}"
  $COMPOSE_CMD down
}

# Detect which container engine to use
detect_container_engine

# Process command line arguments
case "$1" in
  build)
    build_image
    ;;
  run)
    run_container
    ;;
  start)
    build_image
    run_container
    ;;
  stop)
    stop_container
    ;;
  logs)
    show_logs
    ;;
  shell)
    open_shell
    ;;
  compose-up)
    compose_up
    ;;
  compose-down)
    compose_down
    ;;
  help|*)
    show_help
    ;;
esac

echo -e "${GREEN}Done!${NC}"