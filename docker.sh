#!/bin/bash

# Docker helper script for Sayur Lokal

# Make script executable with: chmod +x docker.sh
# Then run with: ./docker.sh [command]

# Set colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Display help message
show_help() {
  echo -e "${YELLOW}Sayur Lokal Docker Helper${NC}"
  echo ""
  echo "Usage: ./docker.sh [command]"
  echo ""
  echo "Commands:"
  echo "  build       Build the Docker image"
  echo "  run         Run the container (detached)"
  echo "  start       Build and run the container (detached)"
  echo "  stop        Stop the running container"
  echo "  logs        Show container logs (follow mode)"
  echo "  shell       Open a shell in the running container"
  echo "  compose-up  Start with docker-compose (detached)"
  echo "  compose-down Stop docker-compose services"
  echo "  help        Show this help message"
  echo ""
}

# Check if Docker is installed
check_docker() {
  if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed or not in PATH${NC}"
    echo "Please install Docker: https://docs.docker.com/get-docker/"
    exit 1
  fi
}

# Build the Docker image
build_image() {
  echo -e "${GREEN}Building Docker image...${NC}"
  docker build -t sayur-lokal .
}

# Run the container
run_container() {
  echo -e "${GREEN}Running container...${NC}"
  docker run -d -p 3000:3000 --name sayur-lokal-app sayur-lokal
  echo -e "${GREEN}Container started! Access the app at:${NC} http://localhost:3000"
}

# Stop the container
stop_container() {
  echo -e "${YELLOW}Stopping container...${NC}"
  docker stop sayur-lokal-app
  docker rm sayur-lokal-app
}

# Show container logs
show_logs() {
  echo -e "${GREEN}Showing logs (Ctrl+C to exit)...${NC}"
  docker logs -f sayur-lokal-app
}

# Open shell in container
open_shell() {
  echo -e "${GREEN}Opening shell in container...${NC}"
  docker exec -it sayur-lokal-app /bin/sh
}

# Start with docker-compose
compose_up() {
  echo -e "${GREEN}Starting with docker-compose...${NC}"
  docker-compose up -d
  echo -e "${GREEN}Services started! Access the app at:${NC} http://localhost:3000"
}

# Stop docker-compose services
compose_down() {
  echo -e "${YELLOW}Stopping docker-compose services...${NC}"
  docker-compose down
}

# Check if Docker is installed
check_docker

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