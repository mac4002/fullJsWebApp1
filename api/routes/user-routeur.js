// Les imports
const express = require('express');
const router = express.Router();
const userController = require(__basedir + '/controllers/user-controller');

router.post('/', userController.register);


module.exports = router;