```bash
docker build --build-arg DATABASE_VERSION=18.1 --build-arg DATABASE_USERNAME=databaseUser --build-arg DATABASE_PASSWORD=databaseUserPassword --build-arg DATABASE_NAME=eneba_database -t database .
```

```bash
docker run -d -p 5432:5432 database
```
