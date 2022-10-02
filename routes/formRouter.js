const formController= require('../controllers/formController.js')

const router=require('express').Router()

router.post('/addForm',formController.addForm)
router.get('/',formController.getAllForms)
router.get('/:id',formController.getOneForm)
router.get('/User/:userId',formController.getAllFormsByUserId)
router.delete('/:id',formController.deleteForm)

module.exports = router