const {sequelize} = require('../config/dbCofing');
const {DataTypes} = require('sequelize');
const Book = require('./bookModel')

const Library = sequelize.define('Libraries',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING,
        allowNulla: false,
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    estado:{
        type: DataTypes.STRING,
        defaultValue: "EXISTENTE"
    },

    
});



module.exports = Library;