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

The dynamic version is used only to demonstrate de usage of the **@grpc/proto-loader** dependency and ahs only an example of Unary API.

The static version is the one used to demonstrate both unary and streaming types of communication.

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