const { Op, where } = require("sequelize");
const {Library} = require('../models');

const creatLibrary = async (libraryOptions) => {
    try{
        newLibrary = await Library.create(libraryOptions);
        
        return newLibrary;
    }catch(error){
        throw error;
    }
}

const getLibrary = async (libraryId) => {
    try{
        const library = await Library.findByPk(libraryId, { include: [{ all: true }] });
        console.log(`Logitud de libreria  --->  ${library.length}`)
        if(library){
            if( library.estado === "EXISTENTE"){
                return library;
            }else{
                throw new Error (`El libro con identificación id: ${libraryId} ha sido ELIMINADO`)
            }
        }else{
            throw new Error (`La librería con identificación id: ${libraryId} no se ha encontrado`)
        }
    }catch(error){
        throw error;
    }
}

const upDataLibrary = async (libraryid, libraryOptions) => {
    try{
        await getLibrary(libraryid);
        const [numRowsUpdated] = await Library.update(libraryOptions, {where: {id: libraryid}});
        console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
        return Library.findByPk(libraryid);
    }catch(error){
        throw error;
    }
}

const getLibraries = async (criteria) => {
    try {
      let options = { include: [{ all: true }] };
      if (criteria) {
        options = { ...options, where: { [Op.or]: criteria } };
      }
      const libraries = await Library.findAll(options);
      if(libraries.length === 0){
        throw new Error("No se encontraron librerías con ese criterio de busqueda");
      }else{
        return libraries;      
        } 
    } catch (error) {
      throw error;
    }
  };

module.exports = {creatLibrary, getLibrary, upDataLibrary, getLibraries};