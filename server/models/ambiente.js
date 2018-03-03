module.exports=function(sequelize,dataTypes){
    var Ambiente = sequelize.define('Ambiente',{
        id_ambt: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:dataTypes.STRING,
        capacidad: dataTypes.DECIMAL,
        tipo: dataTypes.STRING
    });
    return Ambiente;
};