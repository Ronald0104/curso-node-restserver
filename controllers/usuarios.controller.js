const { response, request } = require('express');

class Usuarios {

    constructor() {

    }

    get(req = request, res = response) {
        const { page = 1, limit = 25, fields} = req.query;

        res.json({
            msg: 'get API - controlador',
            page,
            limit,
            fields 
        })
    }
    put(req, res = response) {
        const id = req.params.id;

        res.json({
            msg: 'put API - controlador',
            id
        })
    }
    post(req, res = response) {
        const { nombre, apellidos } = req.body;

        res.json({
            msg: 'post API - controlador',
            body: { nombre, apellidos }    
        })
    }
    delete(req, res = response) {
        const id = req.params.id;

        res.json({
            msg: 'delete API - controlador',
            id
        })
    }
    patch(req, res = response) {
        res.json({
            msg: 'patch API - controlador'    
        })
    }

}


module.exports = Usuarios;
