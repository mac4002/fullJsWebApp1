//const UserFile = require(__basedir + '/model/user.js').User;
const UserFile = require(__basedir + '/model/user.js');
const User = UserFile.User;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require('bcrypt');

/**
 * Récupère la liste des produits
 */

module.exports.register = (req, res, next) => {
    
    // Récupération du produit
    const userReceived = req.body;
    if(userReceived.ppassword){
        bcrypt.hash(userReceived.ppassword, 16, (err, hash) => {
            if (err) { next(err);}
            else{
                userReceived.ppassword = hash;
                //userReceived.ppassword = '';
                User.create(
                    userReceived,
                    (err, user) => {
                        if(err) { next(err); }
                        else {
                            res.json({result : true});
                        }
                    }
                );
            }
            
        });
    } else{
        res.json({result: false});
    }
  
};