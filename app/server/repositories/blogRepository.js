const knex = require('../db');
const { Blog } = require('../protos/blog_pb');

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
  list: () => knex('blogs'),
  insert: (blog) => knex('blogs').insert(attrFromProto(blog)),
  find: (id) => knex('blogs').where({ id }).first(),
  update: (blog) => knex('blogs').where({ id: blog.getId() }).update(attrFromProto(blog)),
};