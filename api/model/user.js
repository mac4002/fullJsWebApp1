// Les imports
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Création du schéma
const userSchema = new Schema({
    userName:{
        type: String,
        required: 'Username obligatoire',
        unique: true
    },
    email: {
        type: String,
        required: 'Email obligatoire',
        unique: true
    },
    ppassword: {
        type: String,
        //required: 'Password obligatoire',
    },
    firstName: String,
    lastName: String


});

// Création du modèle
const User = mongoose.model('User', userSchema);

module.exports.User = User;