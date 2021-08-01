const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'host.docker.internal',
      user: 'postgres',
      password: '123456',
      port: 5432,
      database: 'courses-udemy-grpc-node',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
};