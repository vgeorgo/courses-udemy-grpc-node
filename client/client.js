const grpc = require('grpc');

const { GreetRequest, Greeting } = require('../server/protos/greet_pb');
const { GreetServiceClient } = require('../server/protos/greet_grpc_pb');

const main = () => {
  const client = new GreetServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure(),
  );

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

main();