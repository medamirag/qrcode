const formController= require('../controllers/formController.js')

const router=require('express').Router()

router.post('/addForm',formController.addForm)
router.get('/',formController.getAllForms)
router.get('/:id',formController.getOneForm)

module.exports = router