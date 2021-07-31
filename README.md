# courses-udemy-grpc-node

Install protoc: https://grpc.io/docs/protoc-installation/

Required to install gRPC Tools globally
```
npm install -g grpc-tools
```

Command to Generate code in Protocol Buffers
```
protoc -I=. ./protos/dummy.proto 
  --js_out=import_style=commonjs,binary:./server 
  --grpc_out=./server 
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```

## Description

The dynamic version is used only to demonstrate de usage of the **@grpc/proto-loader** dependency and has only an example of Unary API.

The static version is the one used to demonstrate both unary, streaming types of communication and some other gRPC features. Each feature is separated in a different method, so we can run the code isolated from the other examples. For this comment/uncomment a method in the **client/static.js** main method.

- Unary RPC: methods **runGreet**, **runSum**
- Server streaming RPC: method **runGreetManyTimes**
- Client streaming RPC: method **runLongGreet**
- Bidirectional streaming RPC: method **runGreetEveryone**

## Run
```
# Static run

# starts the server
npm run static-server
# runs the client script, which is making the request
npm run static-client

# Dynamic run

# starts the server
npm run dynamic-server
# runs the client script, which is making the request
npm run dynamic-client
```