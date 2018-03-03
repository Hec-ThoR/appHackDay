const Docente = require('../models').Docente;
module.exports = {
    showAll: (req, res) => {
        Docente.findAll({})
            .then((result) => res.status(200).send(result))
            .catch((error) => res.status(400).send(error));
    },
    createNew: (req, res) => {
        Docente.create({
            nombre: req.body.nombre,
            ci: req.body.ci,
            mail: req.body.mail,
            materia: req.body.materia
        })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error));
    },
    update: (req, res) => {
        Docente.update({
            materia: req.body.materia,
            mail:req.body.mail
        }, {
            where: {
                id: req.params.id_doc
            }
        })
            .then(result => {
                console.log(result);
                res.status(200).send(result);
            })
            .catch(error => res.status(400).send(error));
    },
    delete: (req, res) => {
        Docente.destroy({
            where: {
                id_doc: req.params.id_doc
            }
        })
            .then(result => {
                res.status(200).send("# eliminados "+result);
            })
            .catch(error => res.status(400).send(error));
    },
};