# Contributing to Sayur Lokal

Thank you for your interest in contributing to Sayur Lokal! This document provides guidelines and instructions to help you contribute effectively to our project.

## About the Project

Sayur Lokal is a Next.js application that aims to connect local vegetable producers with consumers. By contributing to this project, you're helping to support local agriculture and sustainable food systems.

## Development Environment

This project uses [Bun](https://bun.sh/) as the JavaScript runtime instead of Node.js. The project was initialized using `bunx create-next-app@latest` rather than the traditional `npx create-next-app@latest`.

### Prerequisites

- [Bun](https://bun.sh/) (JavaScript runtime)
- Git

### Installing Bun

Installation instructions for Bun are available on the [official Bun website](https://bun.sh/). The process varies slightly depending on your operating system:

- **macOS/Linux**: `curl -fsSL https://bun.sh/install | bash`
- **Windows**: Follow the WSL installation instructions on the Bun website

### Setting Up the Project

1. **Fork the repository** (if you're an external contributor)

2. **Clone the repository**
   ```shell
   git clone git@github.com:sayur-lokal/sayur-lokal.git
   ```

3. **Navigate to the project directory and install dependencies**
   ```shell
   cd sayur-lokal && bun install
   ```

4. **Start the development server**
   ```shell
   bun run dev
   ```
   The application will be available at `http://localhost:3000`

## Contribution Guidelines

### Code Style and Standards

- We follow standard TypeScript and React best practices
- Use meaningful variable and function names
- Write comments for complex logic
- Follow the existing project structure

### Making Changes

1. **Create a new branch** for your feature or bugfix
   ```shell
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test them thoroughly

3. **Commit your changes** with clear, descriptive commit messages
   ```shell
   git commit -m "Add feature: description of the changes"
   ```

### Pull Request Process

1. **Push your changes** to your fork or branch
   ```shell
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** against the main repository

3. **Describe your changes** in the PR description, including:
   - What changes you've made
   - Why you've made these changes
   - Any issues that are addressed

4. **Wait for review** - maintainers will review your PR and may request changes

## Reporting Issues

If you find a bug or have a feature request, please create an issue on the GitHub repository with:

- A clear, descriptive title
- Detailed steps to reproduce (for bugs)
- Expected behavior and actual behavior
- Screenshots if applicable

## Questions and Support

If you have questions about contributing, please reach out to the maintainers or create a discussion on GitHub.

Thank you for contributing to Sayur Lokal!