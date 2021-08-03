const knex = require('../db');
const { Blog } = require('../protos/blog_pb');

const table = 'blogs';

const createFromDb = (row) => {
  const blog = new Blog();

  blog.setId(row.id);
  blog.setAuthor(row.author);
  blog.setTitle(row.title);
  blog.setContent(row.content);

  return blog;
}

const attrFromProto = (blog, useId = false) => {
  const attrs = useId ? { id: blog.getId() } : {};

  return Object.assign(attrs, {
    author: blog.getAuthor(),
    title: blog.getTitle(),
    content: blog.getContent(),
  });
}

module.exports = {
  createFromDb,
  attrFromProto,
  list: () => knex(table),
  insert: (blog) => knex(table).insert(attrFromProto(blog)),
  findOne: (id) => knex(table).where({ id }).first(),
  updateOne: (blog) => knex(table).where({ id: blog.getId() }).update(attrFromProto(blog)),
  deleteOne: (id) => knex(table).where({ id }).delete(),
};