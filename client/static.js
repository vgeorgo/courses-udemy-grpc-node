const grpc = require('grpc');

const { GreetRequest, Greeting } = require('../server/protos/greet_pb');
const { GreetServiceClient } = require('../server/protos/greet_grpc_pb');
const { SumRequest, SquareRootRequest } = require('../server/protos/calculator_pb');
const { CalculatorServiceClient } = require('../server/protos/calculator_grpc_pb');

const host = 'localhost:50051';

const getRPCDeadline = (timeMs) => {
  return new Date(new Date() + timeMs);
};
const getForceErrorDeadline = () => getRPCDeadline(5);
const getDefaultDeadline = () => getRPCDeadline(1000);
const getLongDeadline = () => getRPCDeadline(7000);

const runGreet = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());
  const greeting = new Greeting();
  const request = new GreetRequest();

  greeting.setFirstName('Victor');
  greeting.setLastName('Georg Oliveira');
  request.setGreeting(greeting);

  client.greet(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(r.getResult());
  });
};

const runGreetDeadlineError = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());
  const greeting = new Greeting();
  const request = new GreetRequest();
  const deadline = getForceErrorDeadline();

  greeting.setFirstName('Victor');
  greeting.setLastName('Georg Oliveira');
  request.setGreeting(greeting);

  client.greet(request, { deadline }, (err, r) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log(r.getResult());
  });
};

const runGreetManyTimes = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());

  // Protocol buffer Greeting message
  const greeting = new Greeting();
  greeting.setFirstName('Victor');
  greeting.setLastName('Georg Oliveira');

  const request = new GreetRequest();
  request.setGreeting(greeting);

  const call = client.greetManyTimes(request, () => { });
  call.on('data', (res) => {
    console.log('Server stream received data: ', res.getResult());
  });
  call.on('status', (status) => {
    console.log('Server stream received status: ', status);
  });
  call.on('error', (err) => {
    console.log('Server stream received error: ', err);
  });
  call.on('end', () => {
    console.log('Server stream ended');
  });
};

const runLongGreet = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());
  const request = new GreetRequest();

  const call = client.longGreet(request, (err, r) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Server response from client stream: ${r.getResult()}`);
  });

  const responses = [
    {
      firstName: 'First',
      lastName: 'Person',
    },
    {
      firstName: 'Other',
      lastName: 'Person',
    },
    {
      firstName: 'Another',
      lastName: 'Person',
    }
  ];

  let step = 0;
  const intervalId = setInterval(() => {
    console.log(`Client streaming message: ${step}`);
    const greeting = new Greeting();
    const request = new GreetRequest();

    greeting.setFirstName(responses[step].firstName);
    greeting.setLastName(responses[step].lastName);
    request.setGreeting(greeting);

    call.write(request);

    if (++step >= responses.length) {
      clearInterval(intervalId);
      call.end();
    }
  }, 1000);
};

const runGreetEveryone = () => {
  const client = new GreetServiceClient(host, grpc.credentials.createInsecure());
  const request = new GreetRequest();

  const call = client.greetEveryone(request, () => { });

  const responses = [
    {
      firstName: 'First',
      lastName: 'Person',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Other',
      lastName: 'Person',
    },
    {
      firstName: 'Another',
      lastName: 'Person',
    }
  ];

  call.on('data', (res) => {
    console.log('Server stream received data: ', res.getResult());
  });
  call.on('error', (err) => {
    console.log('Server stream received error: ', err);
  });
  call.on('end', () => {
    console.log('Server stream ended');
  });

  let step = 0;
  const intervalId = setInterval(() => {
    console.log(`Client streaming message: ${step}`);
    const greeting = new Greeting();
    const request = new GreetRequest();

    greeting.setFirstName(responses[step].firstName);
    greeting.setLastName(responses[step].lastName);
    request.setGreeting(greeting);

    call.write(request);

    if (++step >= responses.length) {
      clearInterval(intervalId);
      call.end();
    }
  }, 1000);
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

const runSquareRootError = () => {
  const client = new CalculatorServiceClient(host, grpc.credentials.createInsecure());

  const number = -3;
  const request = new SquareRootRequest();
  request.setNumber(number);

  client.squareRoot(request, (err, r) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log(`${number} square root is ${r.getNumberRoot()}`);
  });
};

const main = () => {
  // runGreet();
  // runSum();
  // runGreetManyTimes();
  // runLongGreet();
  // runGreetEveryone();
  // runSquareRootError();
  runGreetDeadlineError();
};

main();