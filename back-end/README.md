## Environment

Create `.env.production` and `.env.development` files using the `.env.example` template.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

## Production

### Building

Create a production build:

```bash
npm run build
```

### Running production build

Start the production server:

```bash
npm run start
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build --build-arg NODE_VERSION=24.13.0 --build-arg PORT=3000 --build-arg DATABASE_HOST_ADDRESS=localhost --build-arg DATABASE_PORT=5432 --build-arg DATABASE_USERNAME=user --build-arg DATABASE_PASSWORD=password --build-arg DATABASE_NAME=eneba_database -t back-end --target development-env .

# Run the container
docker run --name back-end -p 3000:3000 -d back-end
```
