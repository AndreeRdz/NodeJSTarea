const {sequelize} = require('../config/dbCofing');
const {DataTypes} = require('sequelize');
const Book = require('./bookModel');
const Library = require('./libraryModel');

const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type: DataTypes.STRING,
        defaultValue: "EXISTENTE"
    }

});


module.exports = User;