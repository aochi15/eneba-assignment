## Environment

Create `.env.production` and `.env.development` files using the `.env.example` template.

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build --build-arg DATABASE_VERSION=18.1 --build-arg DATABASE_USERNAME=user --build-arg DATABASE_PASSWORD=password --build-arg DATABASE_NAME=eneba_database -t database .

# Run the container
docker run --name database -p 5432:5432 -d database
```
