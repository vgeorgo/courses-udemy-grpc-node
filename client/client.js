const grpc = require('grpc');

const services = require('../server/protos/dummy_grpc_pb');

const main = () => {
  const client = new services.DummyServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure(),
  );

  console.log('Client started');
};

main();