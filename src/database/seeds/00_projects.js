exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 1,
          title: 'My Project'
        }
      ]);
    });
};

// Seed adiciona um valor Default para a tabela, que existirá antes de qualquer insert

// npx knex seed:make 00_projects

// npx knex seed:run