exports.up = function (knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary()
        table.string('username').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};

// npx knex migrate:make create_table_user  -  Cria uma igração

//npx knex migrate:latest  -  Roda a as migrações