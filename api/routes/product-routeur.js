// Les imports
const express = require('express');
const router = express.Router();
const productController = require(__basedir + '/controllers/product-controller');

/**
 * Préfixes des routes : "/api/products"
 */
router.route('/')
    // Liste de produits
    .get(productController.list)
    // Ajout d'un produit
    .post(productController.add)
    // Modification d'un produit
    .put(productController.update)
;

// Détail d'un produit
router.route('/:id')
    // Détail d'un produit
    .get(productController.show)
    // Suppression d'un produit
    .delete(productController.delete)
;

module.exports = router;