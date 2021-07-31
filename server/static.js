const path = require('path');
const grpc = require('grpc');
const fs = require('fs');

const { GreetResponse } = require('./protos/greet_pb');
const { GreetServiceService } = require('./protos/greet_grpc_pb');
const { SumResponse, SquareRootResponse } = require('./protos/calculator_pb');
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
 * Implements greetManyTimes RPC method
 */
const greetEveryone = (call, _) => {
  const relateds = {};
  const people = [];

  call.on('data', (req) => {
    const fullName = `${req.getGreeting().getFirstName()} ${req.getGreeting().getLastName()}`;
    console.log('Client stream received data: ', fullName);

    // Avoid duplicate entries
    if (people.includes(fullName)) return;

    const newIndex = people.length;
    const relations = [];

    people.push(fullName);

    lastNames = req.getGreeting().getLastName().split(' ');
    lastNames.forEach(lastName => {
      if (!relateds[lastName]) relateds[lastName] = [];
      relateds[lastName].forEach(index => {
        // Avoid duplicate relations
        if (relations.includes(people[index])) return;
        relations.push(people[index]);
      });

      relateds[lastName].push(newIndex);
    });

    const greeting = new GreetResponse();
    greeting.setResult(`${fullName} has ${relations.length} relations so far`);
    call.write(greeting);
  });

  call.on('error', (err) => {
    console.log('Client stream received error: ', err);
  });

  call.on('end', () => {
    console.log('Client stream ended, stopping process');
    call.end();
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

/**
 * Implements sum RPC method
 */
const squareRoot = (call, callback) => {
  const number = call.request.getNumber();
  if (number < 0) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: `Number must be positive, sent ${number}`
    });
  }

  const response = new SquareRootResponse();
  response.setNumberRoot(Math.sqrt(number));
  callback(null, response);
};

const getCertificateConfig = (safe = false) => {
  if (!safe) return grpc.ServerCredentials.createInsecure();

  return grpc.ServerCredentials.createSsl(
    fs.readFileSync(path.join(__dirname, '..', 'certs', 'ca.crt')),
    [{
      cert_chain: fs.readFileSync(path.join(__dirname, '..', 'certs', 'server.key')),
      private_key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'server.crt'))
    }],
    true
  );
}

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  // Services
  server.addService(GreetServiceService, { greet, greetManyTimes, longGreet, greetEveryone });
  server.addService(CalculatorServiceService, { sum, squareRoot });

  // Server start
  server.bind(serverAddr, getCertificateConfig(false));
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();