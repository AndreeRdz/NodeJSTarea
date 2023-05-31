const {userProvider} = require('../provides')
const creatUser = async (userOptions) => {
    return await userProvider.creatUser(userOptions);
}
const getUser = async (userId) => {
    return await userProvider.getUser(userId);
}
const upDateUser = async (userId,userOptions)=>{
    return await userProvider.upDataUser(userId,userOptions);
}
const getUsers = async (options) => {
    return await userProvider.getUsers(options);
}

module.exports = {creatUser,getUser, getUsers,upDateUser};