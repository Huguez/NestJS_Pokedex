
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

#  Run in development

1.- Clone the repository
```
git clone https://github.com/Huguez/NestJS_Pokedex.git
```
2.- Install dependencies
```
npm install
```

3.- rename .env.template to .env and write variables
```
PORT     = *******
MONGODB  = *******
NODE_ENV = *******
```

4.- Set up the database with Docker
```
docker-compose up -d
```

5.- Run the seed
```
http://localhost:3000/api/v2/seed
```

6.- Run the service in development
```
npm run dev
```
