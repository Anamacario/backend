const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

routes.get('/users', async(req, res)=>{
    const users = await connection('users').select('*');
    res.json(users);
})

routes.post('/users', async(req, res)=>{
    const {name, email, idadei, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    res.json(id)
})

module.exports = routes;

/**
 * Driver: Select * from users:
 * Query Builders: table('users').select('*').where('')
 * 
 * 
 * GET: buscar/listar uma informacao no backend
 * POST: utilizado para cirar uma informacao no backend
 * PUT: alterar dado/informacão no backend
 * DELETE: deletar alguma informacao no backend
 * 
 *
 * Parametros
 * Query: paramentros nomeados enviados na rota
 * Rout params: são parametros usados para identificar um recurso
 * Request body: corpo da requisicão
 */