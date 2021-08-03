# courses-udemy-grpc-node

Install protoc: https://grpc.io/docs/protoc-installation/

Command to Generate code in Protocol Buffers
```
protoc -I=. ./protos/dummy.proto 
  --js_out=import_style=commonjs,binary:./server 
  --grpc_out=./server 
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```

## Description

The dynamic version is used only to demonstrate de usage of the **@grpc/proto-loader** dependency and has only an example of Unary API.

The static version is the one used to demonstrate both unary, streaming types of communication and some other gRPC features and the one initialized with docker-compose. Each feature is separated in a different method, so we can run the code isolated from the other examples. For this comment/uncomment a method in the **client/static.js** main method.

- Unary RPC: methods **runGreet**, **runSum**
- Server streaming RPC: method **runGreetManyTimes**
- Client streaming RPC: method **runLongGreet**
- Bidirectional streaming RPC: method **runGreetEveryone**
- Error scenario: method **runSquareRootError**
- Deadline error scenario: method **runGreetDeadlineError**

## Generatig test certificates

Have OpenSSL installed and run the command inside the root project folder:
```
sh ./scripts/gen_certs.sh
```

The output will be a **certs** folder with the certificates that will be used.

## Run

Install docker-compose: https://docs.docker.com/compose/install/

Choose a command to start the server in the **.env** file:
```
# This can be static-server || dynamic-server || blog-server
RUN_COMMAND=blog-server
```

Run project, postgres and pgadmin:
```
# this will initialize the docker-compose file
./scripts/run.sh
```

Exec container in interactive mode, considering both root folder and docker-compose name were not changed:
```
# this will exec SH inside the grpc server container
./scripts/exec.sh
# After exec run client script to test the examples inside the container
npm run static-client
```

## Evans

CLI gRPC: https://github.com/ktr0731/evans