const path = require('path');
const grpc = require('grpc');
const fs = require('fs');

const { Blog, BlogResponse } = require('./protos/blog_pb');
const { BlogServiceService } = require('./protos/blog_grpc_pb');
const { createFromDb, list, insert } = require('./repositories/blogRepository');

const listBlog = (call, _) => {
  list().then(data => {
    data.forEach(row => {
      const res = new BlogResponse();
      res.setBlog(createFromDb(row));

      call.write(res);
    });

    call.end();
  });
};

const createBlog = (call, callback) => {
  const blog = call.request.getBlog();

  insert(blog).returning('*').then(([row]) => {
    const res = new BlogResponse();
    res.setBlog(createFromDb(row));

    callback(null, res);
  });
};

const main = () => {
  const server = new grpc.Server();
  const serverAddr = '127.0.0.1:50051';

  // Services
  server.addService(BlogServiceService, { listBlog, createBlog });

  // Server start
  server.bind(serverAddr, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running on ${serverAddr}`);
};

main();