
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        { author: 'Victor', title: 'A new tech', content: 'gRPC' },
        { author: 'Fred', title: 'Living in a human world', content: 'Challenging' },
        { author: 'Witcher', title: 'Potion of milenia', content: 'Herbs and tea' },
      ]);
    });
};
