exports.up = function (knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id').primary()
        table.string('title').notNullable()

        // Relacionamento com a tabela users
        table.integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE') // se o usuário dono do projeto for deletado, este projeto tbm será
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects')
};