const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Dynamically loading proto file
const greetProtoPath = path.join(__dirname, '..', 'protos', 'greet.proto');
const greetProtoDefinition = protoLoader.loadSync(greetProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const greetPackageDefinition = grpc.loadPackageDefinition(greetProtoDefinition).greet;

/**
 * Implements greet RPC method
 */
const greet = (call, callback) => {
  const { first_name: firstName, last_name: lastName } = call.request.greeting;
  callback(null, {
    result: `Hello ${firstName} ${lastName}`,
  });
};

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  // Services
  server.addService(greetPackageDefinition.GreetService.service, { greet });

  // Server start
  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();