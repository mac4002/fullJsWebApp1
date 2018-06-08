
const ProductFile = require(__basedir + '/model/product.js');
const Product = ProductFile.Product;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/**
 * Récupère la liste des produits
 */
module.exports.list = (req, res, next) => {
    // Récupération des produits
    Product.find(
        (err, products) => {
            if(err) { next(err); }
            else {
                res.json(products);
            }
        }
    );
};

/**
 * Ajout un produit en BDD
 */
module.exports.add = (req, res, next) => {

    // Récupération du produit
    const productReceived = req.body;
    
    // Ajout d'un produit en BDD
    Product.create(
        productReceived,
        (err, productBDD) => {
            if(err) { next(err); }
            else {
                res.json(productBDD);
            }
        }
    );
    
};

/**
 * Récupération d'un produit à partir de son id
 */
module.exports.show = (req, res, next) => {
    // Récupération de l'id
    const id = req.params.id;
    if(ObjectId.isValid(id)) {
        // Récupération du produit
        Product.findOne(
            { '_id' : id },
            (err, product) => {
                if(err) { next(err); }
                else {
                    res.json(product);
                }
            }
        );
    } else {
        res.json(null);
    }   
};

/**
 * Modification d'un produit
 */
module.exports.update = (req, res, next) => {
    
    // Récupération du produit
    const productToUpdate = req.body;

    // Si l'id du produit envoyé est valide : on modifie
    if(productToUpdate._id && ObjectId.isValid(productToUpdate._id)) {
        // Modification du produit
        Product.update(
            // Les conditions que doivent respectés les enregistrements pour être modifiés
            {
                '_id' : productToUpdate._id
            },

            // Les modifications à effectuer
            productToUpdate,

            // Fonction de rappel (callback) à éxecuter lorsque les modifications ont été faites
            (err, nbLines) => {
                if(err) { next(err); }
                else {
                    res.json({ result: true });
                } 
            }
        );
    } else {
        res.json({ result: false });
    }    
};

/**
 * Suppression d'un produit
 * @param req 
 * @param res 
 * @param next 
 */
module.exports.delete = (req, res, next) => {
    
    // Récupération de l'id
    const idToDelete = req.params.id;

    if(ObjectId.isValid(idToDelete)) {
        // Suppression du produit
        Product.deleteOne(
            { '_id' : idToDelete },
            (err) => {
                if(err) { next(err); }
                else {
                    res.json({ result: true});
                }
            }
        );

    } else {
        res.json({ result: false});
    }
};
