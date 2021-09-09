require('dotenv').config('./.env');
module.exports = {
/* guardado na varável de ambiente 'SECRET'
*/
    secret: process.env.SECRET,
};