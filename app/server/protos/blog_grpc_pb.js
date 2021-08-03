// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_blog_pb = require('../protos/blog_pb.js');

function serialize_blog_BlogResponse(arg) {
  if (!(arg instanceof protos_blog_pb.BlogResponse)) {
    throw new Error('Expected argument of type blog.BlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_BlogResponse(buffer_arg) {
  return protos_blog_pb.BlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_CreateBlogRequest(arg) {
  if (!(arg instanceof protos_blog_pb.CreateBlogRequest)) {
    throw new Error('Expected argument of type blog.CreateBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_CreateBlogRequest(buffer_arg) {
  return protos_blog_pb.CreateBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_ListBlogRequest(arg) {
  if (!(arg instanceof protos_blog_pb.ListBlogRequest)) {
    throw new Error('Expected argument of type blog.ListBlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_ListBlogRequest(buffer_arg) {
  return protos_blog_pb.ListBlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogServiceService = exports.BlogServiceService = {
  listBlog: {
    path: '/blog.BlogService/ListBlog',
    requestStream: false,
    responseStream: true,
    requestType: protos_blog_pb.ListBlogRequest,
    responseType: protos_blog_pb.BlogResponse,
    requestSerialize: serialize_blog_ListBlogRequest,
    requestDeserialize: deserialize_blog_ListBlogRequest,
    responseSerialize: serialize_blog_BlogResponse,
    responseDeserialize: deserialize_blog_BlogResponse,
  },
  createBlog: {
    path: '/blog.BlogService/CreateBlog',
    requestStream: false,
    responseStream: false,
    requestType: protos_blog_pb.CreateBlogRequest,
    responseType: protos_blog_pb.BlogResponse,
    requestSerialize: serialize_blog_CreateBlogRequest,
    requestDeserialize: deserialize_blog_CreateBlogRequest,
    responseSerialize: serialize_blog_BlogResponse,
    responseDeserialize: deserialize_blog_BlogResponse,
  },
};

exports.BlogServiceClient = grpc.makeGenericClientConstructor(BlogServiceService);
