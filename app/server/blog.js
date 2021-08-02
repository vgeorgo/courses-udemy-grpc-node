const path = require('path');
const grpc = require('grpc');
const fs = require('fs');

const { Blog, ListBlogResponse } = require('./protos/blog_pb');
const { BlogServiceService } = require('./protos/blog_grpc_pb');
const { createFromDb, list } = require('./repositories/blogRepository');

const listBlog = (call, _) => {
  list.then(data => {
    data.forEach(row => {
      const res = new ListBlogResponse();
      res.setBlog(createFromDb(row));

      call.write(res);
    });

    call.end();
  });
};

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  // Services
  server.addService(BlogServiceService, { listBlog });

  // Server start
  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();