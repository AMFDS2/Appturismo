const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://amfds96:teste@cluster0.ox9eo.mongodb.net/Appturismo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

const pontosturisticos = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},

})

const PontosturisticosModel = mongoose.model('pontosturisticos', pontosturisticos);


module.exports = {PontosturisticosModel}