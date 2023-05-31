const {bookProvider} = require('../provides');
const { options } = require('../routes/userRoute');
const creatBook = async (book) => {
    return await bookProvider.creatBook(book);
}
const getBook = async(id) => {
    return await bookProvider.getBook(id);
}
const upDataBook = async(id,bookOptions) => {
    return await bookProvider.upDataBook(id,bookOptions);
}
const getBooks = async(options) => {
    return await bookProvider.getBooks(options);
}
const deleteLogBook = async(id) => {
    return await bookProvider.deleteLogBook(id);
}

module.exports = {creatBook, getBook, upDataBook, getBooks, deleteLogBook};