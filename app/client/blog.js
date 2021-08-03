const path = require('path');
const grpc = require('grpc');
const fs = require('fs');

const { Blog, ListBlogRequest, BlogRequest, BlogIdRequest } = require('../server/protos/blog_pb');
const { BlogServiceClient } = require('../server/protos/blog_grpc_pb');

const host = '127.0.0.1:50051';

const runListBlogs = () => {
  const client = new BlogServiceClient(host, grpc.credentials.createInsecure());
  const call = client.listBlog(new ListBlogRequest(), () => { });

  call.on('data', (res) => {
    console.log('Blog received: ', res.getBlog().toString());
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

const runCreateBlog = () => {
  const client = new BlogServiceClient(host, grpc.credentials.createInsecure());
  const blog = new Blog();
  const request = new BlogRequest();

  blog.setAuthor('Robot');
  blog.setTitle('Is AI a living thing?');
  blog.setContent('Does it have a conscience?');

  request.setBlog(blog);

  client.createBlog(request, (err, r) => {
    if (err) return console.log(err.message);

    console.log(r.getBlog().toString());
  });
};

const runFindBlog = () => {
  const client = new BlogServiceClient(host, grpc.credentials.createInsecure());
  const request = new BlogIdRequest();

  request.setId(11);

  client.findBlog(request, (err, r) => {
    if (err) return console.log(err.message);

    console.log(r.getBlog().toString());
  });
};

const runUpdateBlog = () => {
  const client = new BlogServiceClient(host, grpc.credentials.createInsecure());
  const blog = new Blog();
  const request = new BlogRequest();

  blog.setId(50);
  blog.setAuthor('No one');
  blog.setTitle('Nothing');
  blog.setContent('No content');

  request.setBlog(blog);

  client.updateBlog(request, (err, r) => {
    if (err) return console.log(err.message);

    console.log(r.getBlog().toString());
  });
};

const runDeleteBlog = () => {
  const client = new BlogServiceClient(host, grpc.credentials.createInsecure());
  const request = new BlogIdRequest();

  request.setId(12);

  client.deleteBlog(request, (err, r) => {
    if (err) return console.log(err.message);

    console.log(r.getBlog().toString());
  });
};

const main = () => {
  runListBlogs();
  // runCreateBlog();
  // runFindBlog();
  // runUpdateBlog();
  // runDeleteBlog();
};

main();