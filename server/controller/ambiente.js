const Ambiente = require('../models').Ambiente;
module.exports = {
    showAll: (req, res) => {
        Ambiente.findAll({})
            .then((result) => res.status(200).send(result))
            .catch((error) => res.status(400).send(error));
    },
    createNew: (req, res) => {
        Ambiente.create({
            nombre:req.body.nombre,
            capacidad: req.body.capacidad,
            tipo: req.body.tipo
        })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error));
    },
    update: (req, res) => {
        Ambiente.update({
            nombre:req.body.nombre,
            capacidad: req.body.capacidad,
            tipo: req.body.tipo
        }, {
            where: {
                id_ambt: req.params.id_ambt
            }
        })
            .then(result => {
                console.log(result);
                res.status(200).send(result);
            })
            .catch(error => res.status(400).send(error));
    },
    delete: (req, res) => {
        Ambiente.destroy({
            where: {
                id_ambt: req.params.id_ambt
            }
        })
            .then(result => {
                res.status(200).send("# eliminados "+result);
            })
            .catch(error => res.status(400).send(error));
    },
};