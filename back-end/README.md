```bash
docker build --build-arg NODE_VERSION=24.13.0 --build-arg PORT=3000 --build-arg DATABASE_HOST_ADDRESS=localhost --build-arg DATABASE_PORT=5432 --build-arg DATABASE_USERNAME=user --build-arg DATABASE_PASSWORD=password --build-arg DATABASE_NAME=eneba_database -t back-end --target development-env .
```

```bash
docker run --name back-end -p 3000:3000 -d back-end
```
