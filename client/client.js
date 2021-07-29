const grpc = require('grpc');

const { GreetRequest, Greeting } = require('../server/protos/greet_pb');
const { GreetServiceClient } = require('../server/protos/greet_grpc_pb');
const { SumRequest } = require('../server/protos/calculator_pb');
const { CalculatorServiceClient } = require('../server/protos/calculator_grpc_pb');

const host = 'localhost:50051';

const runGreet = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());

  // Protocol buffer Greeting message
  const greeting = new Greeting();
  greeting.setFirstName('Victor');
  greeting.setLastName('Georg Oliveira');

  const request = new GreetRequest();
  request.setGreeting(greeting);

  client.greet(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(r.getResult());
  });
};

const runSum = () => {
  const client = new CalculatorServiceClient(host, grpc.credentials.createInsecure());

  const request = new SumRequest();
  request.setX(3);
  request.setY(10);

  client.sum(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`${request.getX()} + ${request.getY()} = ${r.getResult()}`);
  });
};

const main = () => {
  runGreet();
  runSum();
};

main();