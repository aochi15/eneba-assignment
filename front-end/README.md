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
docker build --build-arg NODE_VERSION=24.13.0 --build-arg PORT=3001 --build-arg BACK_END_HOST_ADDRESS=localhost --build-arg BACK_END_PORT=3000 --build-arg BACK_END_API_PREFIX=api --build-arg BACK_END_IMAGES_PREFIX=images -t front-end --target development-env .

# Run the container
docker run --name front-end -p 3001:3001 -d front-end
```
