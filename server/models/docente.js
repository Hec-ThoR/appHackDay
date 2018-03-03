module.exports=function(sequelize,dataTypes){
    var Docente = sequelize.define('Docente',{
        id_doc: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:dataTypes.STRING,
        ci: dataTypes.DECIMAL,
        mail: dataTypes.STRING,
        materia: dataTypes.STRING,
    });
    return Docente;
};