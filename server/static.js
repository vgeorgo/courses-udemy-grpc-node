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
 * Implements greetManyTimes RPC method
 */
const greetManyTimes = (call, _) => {
  const responses = [
    'Hello',
    call.request.getGreeting().getFirstName(),
    call.request.getGreeting().getLastName()
  ];

  let step = 0;
  const intervalId = setInterval(() => {
    const greeting = new GreetResponse();
    greeting.setResult(responses[step]);

    call.write(greeting);

    if (++step >= responses.length) {
      clearInterval(intervalId);
      call.end();
    }
  }, 1000);
};

/**
 * Implements greetManyTimes RPC method
 */
const longGreet = (call, callback) => {
  let processedRecords = 0;

  call.on('data', (req) => {
    console.log('Client stream received data: ', `Hello ${req.getGreeting().getFirstName()} ${req.getGreeting().getLastName()}`);
    processedRecords++;
  });
  call.on('status', (status) => {
    console.log('Client stream received status: ', status);
  });
  call.on('error', (err) => {
    console.log('Client stream received error: ', err);
  });
  call.on('end', () => {
    console.log('Client stream ended, sending response');
    const greeting = new GreetResponse();
    greeting.setResult(`${processedRecords} processed records`);
    callback(null, greeting);
  });
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
  server.addService(GreetServiceService, { greet, greetManyTimes, longGreet });
  server.addService(CalculatorServiceService, { sum });

  // Server start
  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();