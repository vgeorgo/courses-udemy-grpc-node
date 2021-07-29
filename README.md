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

## Run
```
# Static run

# starts the server
npm run static-server
# runs the client script, which is making the request
npm run static-client

# starts the server
npm run dynamic-server
# runs the client script, which is making the request
npm run dynamic-client
```