const grpc = require('grpc');

const { GreetResponse } = require('./protos/greet_pb');
const { GreetServiceService } = require('./protos/greet_grpc_pb');
const { SumResponse } = require('./protos/calculator_pb');
const { CalculatorServiceService } = require('./protos/calculator_grpc_pb');

/**
 * Implements greet RPC method
 */
const greet = (call, callback) => {
  const greeting = new GreetResponse();
  greeting.setResult(
    `Hello ${call.request.getGreeting().getFirstName()} ${call.request.getGreeting().getLastName()}`
  );
  callback(null, greeting);
};

/**
 * Implements sum RPC method
 */
const sum = (call, callback) => {
  const sum = new SumResponse();
  sum.setResult(call.request.getX() + call.request.getY());
  callback(null, sum);
};

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  // Services
  server.addService(GreetServiceService, { greet });
  server.addService(CalculatorServiceService, { sum });

  // Server start
  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();