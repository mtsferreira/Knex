const knex = require('../database/connection');

module.exports = {

    // retorna a tabela de usuários
    async index (request, response) {
        const results = await knex('users')

        return response.json(results)
    },

    // cria um usuário
    async create(request, response) {
        const { username } = request.body;

        await knex('users').insert({
            username
        })
        return response.status(201).send()
    },

    // atualiza o usuário
    async update(request, response) {
        const { username } = request.body;
        const { id } = request.params;

        await knex('users').update({ username }).where({ id })

        return response.send()
    },

    // deletar um usuário
    async delete(request, response) {
        const { id } = request.params;

        await knex('users').where({ id }).del()

        return response.send()
    },
}