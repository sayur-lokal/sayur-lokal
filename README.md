ali![Sayur Lokal](brainstorm/sayur-lokal-inline.svg)

# Sayur Lokal - Fresh. Local. Sustainable.

Sayur Lokal is a digital platform that brings the warmth and goodness of local markets into modern homes. We make it easy for families to access fresh, locally sourced meal preps—delivered straight to their doorstep with minimal environmental impact.

## About the Project

Sayur Lokal connects households with local farmers and food artisans to deliver ready-to-cook or ready-to-eat meal preps made from fresh, local ingredients. By using eco-friendly packaging and our own optimized delivery service, we offer a convenient, sustainable alternative to traditional food delivery.

### Key Features

- **Eco-conscious**: Compostable, reusable, and recyclable packaging only
- **Local-first**: All products are sourced from verified local farms and artisans
- **Meal-prep focused**: Curated weekly menus for various dietary needs (e.g., family packs, vegetarian, quick meals)
- **Eco Impact Tracker**: See the CO2 saved per order and earn green points

### How It Works

1. **Browse**: Choose from curated meal-prep bundles or individual fresh products
2. **Order**: Place an order via mobile/desktop
3. **Package**: Items are sourced, packed with sustainable materials
4. **Deliver**: Delivered to your door via Sayur Lokal's private eco-friendly delivery network
5. **Review & Earn**: Leave a review, track your impact, and earn eco points

## Target Market

- **Primary**: Urban families and working professionals in Greater Jakarta and surrounding cities
- **Secondary**: Eco-conscious individuals, young couples, health enthusiasts, and meal planners

## Development Roadmap

### Phase 1: MVP Launch
- Limited area delivery (e.g., South Jakarta)
- Manual fulfillment with selected farm partners

### Phase 2: Platform Expansion
- Full online product management for sellers
- Smart inventory, route optimization

### Phase 3: Scaling Up
- Expand to multiple cities
- Add app experience + advanced logistics backend

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker Setup

This project includes Docker configuration for easy deployment and development. The setup uses Bun as the runtime environment.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, for easier development)

### Building and Running with Docker

Build and run the Docker image:

```bash
# Build the Docker image
docker build -t sayur-lokal .

# Run the container
docker run -p 3000:3000 sayur-lokal
```

### Using Docker Compose

For a simpler setup, you can use Docker Compose:

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Using the Docker Helper Script

For convenience, a helper script is included to simplify Docker operations:

```bash
# Make the script executable (one-time setup)
chmod +x docker.sh

# Show available commands
./docker.sh help

# Build and start the application
./docker.sh start

# View logs
./docker.sh logs

# Stop the application
./docker.sh stop
```

### Environment Variables

The application uses environment variables for configuration. A sample `.env.example` file is provided as a template:

```bash
# Copy the example file
cp .env.example .env

# Edit the file with your settings
nano .env
```

When using Docker Compose, these environment variables will be automatically loaded from the `.env` file. You can also pass them directly to the Docker container:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  sayur-lokal
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Join Us

Join us in building a healthier, more sustainable future. Let's connect local goodness with modern convenience.
