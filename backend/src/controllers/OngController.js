const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        //listar todas as ONGS cadastradas no banco
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        //vai gerar um id com caracteres aleatorios hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');

        //cria um registro na tabela ongs
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    },
    
};