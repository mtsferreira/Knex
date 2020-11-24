const knex = require('../database/connection');

module.exports = {

    async index (request, response) {

        const { user_id } = request.query; // ..../projects?user_id=.....

        const query = knex('projects')

        if(user_id) {
            query
                .where({ user_id })  // ('user_id', user_id)
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.*')
        }

        const results = await query;

        return response.json(results)
    },


    // Criar novo Projeto
    async create (request, response, next) {
        try {

            const { title, user_id } = request.body;

            await knex('projects').insert({
                title,
                user_id
            })

            return response.status(201).send();

        } catch (error) {
            next(error)
        }
    }
}