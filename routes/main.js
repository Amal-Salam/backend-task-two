const express = require('express');
const {body}=require('express-validator');
const PersonController = require('../controller/Person');
const router = express.Router();

router.post('/',[body('name').isString()], PersonController.create);
router.get('/', PersonController.findAll);
router.get('/:id', PersonController.findOne);
router.patch('/:id',[body('*').isString()], PersonController.update);
router.delete('/:id', PersonController.destroy);

module.exports = router;
