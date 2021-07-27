const grpc = require('grpc');

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();