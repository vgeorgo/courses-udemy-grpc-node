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


protoc -I=. ./protos/dummy.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`