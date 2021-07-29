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

const host = 'localhost:50051';

const runGreet = () => {
  const client = new greetPackageDefinition.GreetService(host, grpc.credentials.createInsecure());

  // Protocol buffer Greeting message
  const request = {
    greeting: {
      first_name: 'Victor',
      last_name: 'Georg Oliveira',
    },
  };

  client.greet(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(r.result);
  });
};

const main = () => {
  runGreet();
};

main();