const knex = require('../db');
const { Blog } = require('../protos/blog_pb');

module.exports = {
  createFromDb: (row) => {
    const blog = new Blog();

    blog.setId(element.id);
    blog.setAuthor(element.author);
    blog.setTitle(element.title);
    blog.setContent(element.content);

    return blog;
  },
  list: () => knex('blogs'),
};