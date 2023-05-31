const { Op, where } = require("sequelize");
const {User} = require('../models');

const creatUser = async (userOptions) => {
    try{
        newUser = await User.create(userOptions);
        return newUser;
    }catch(error){
        throw error;
    }
}

const getUser = async (id) => {
    try{
        const user = await User.findByPk(id);
        
        if(user){
            if(user.estado === "EXISTENTE"){
                return user;
            }else{
                throw new Error (`El usuario con identificación id: ${id} ha sido ELIMINADO`)
            }
        }else{
            throw new Error (`El usuario con identificación id: ${id} no se ha encontrado`)
        }
    }catch(error){
        throw error;
    }
}

const upDataUser = async (userid,userOptions ) => {
    try{
        await getUser(userid);
        const [numRowsUpdated] = await User.update(userOptions, {where: {id: userid}});
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return User.findByPk(userid);
    }catch(error){
        throw error;
    }
}

const getUsers = async (criteria) => {
    try {
      let options = { include: [{ all: true }] };
      if (criteria) {
        options = { ...options, where: { [Op.or]: criteria } };
      }
      const users = await User.findAll(options);
      if(users.length === 0){
        throw new Error("No se encontraron usuarios con ese criterio de busqueda");
      }else{
        return users;      
        } 
    } catch (error) {
      throw error;
    }
  };

const validateUser = async (userName, password) => {
    try {
      const user = await User.findOne({
        where: { userName, password },
      });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  };
module.exports = {creatUser, getUser, upDataUser,getUsers,validateUser};