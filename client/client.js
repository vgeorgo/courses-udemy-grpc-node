const grpc = require('grpc');

const { GreetRequest, Greeting } = require('../server/protos/greet_pb');
const { GreetServiceClient } = require('../server/protos/greet_grpc_pb');
const { SumRequest, Sum } = require('../server/protos/sum_pb');
const { SumServiceClient } = require('../server/protos/sum_grpc_pb');

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
  const client = new SumServiceClient(host, grpc.credentials.createInsecure());

  // Protocol buffer Sum message
  const sum = new Sum();
  sum.setX(3);
  sum.setY(10);

  const request = new SumRequest();
  request.setSum(sum);

  client.sum(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(r.getResult());
  });
};

const main = () => {
  runGreet();
  runSum();
};

main();