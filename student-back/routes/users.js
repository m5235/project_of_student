var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.post('/',userController.createUser);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.delete('/:id',userController.deleteUser);
router.patch('/:id',userController.updateUser);

module.exports = router;