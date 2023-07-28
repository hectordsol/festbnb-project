require("dotenv").config();

module.exports ={
    MONGO_URI: process.env.MONGO_URI,
    URL_SERVICIO_USUARIOS: process.env.URL_SERVICIO_USUARIOS,
};