module.exports=function(sequelize,dataTypes){
    var Reserva = sequelize.define('Reserva',{
        id_rsva: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        motivo:dataTypes.STRING,
        periodo: dataTypes.STRING,
        dias: dataTypes.STRING,
        horario: dataTypes.STRING,
        id_ambt_F: dataTypes.INTEGER,
        id_doc_F: dataTypes.INTEGER
    });
    return Reserva;
};