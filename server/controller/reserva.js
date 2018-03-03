const Reserva = require('../models').Reserva;
module.exports = {
    showAll: (req, res) => {
        Reserva.findAll({})
            .then((result) => res.status(200).send(result))
            .catch((error) => res.status(400).send(error));
    },
    createNew: (req, res) => {
        Reserva.create({
            motivo:req.body.motivo,
            periodo: req.body.periodo,
            dias: req.body.dias,
            horario: req.body.horario,
            id_ambt_F: req.body.id_ambt_F,
            id_doc_F: req.body.id_doc_F
        })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error));
    },
    update: (req, res) => {
        Reserva.update({
            motivo:req.body.materia,
            periodo: req.body.periodo,
            dias: req.body.dias,
            horario: req.body.horario,
        }, {
            where: {
                id_rsva: req.params.id_rsva
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
                id_rsva : req.params.id_rsva
            }
        })
            .then(result => {
                res.status(200).send("# eliminados "+result);
            })
            .catch(error => res.status(400).send(error));
    },
};