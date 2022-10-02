const userController= require('../controllers/userController')

const router=require('express').Router()

router.post('/addUser',userController.addUser)
router.delete('/:id',userController.deleteUser)
router.post('/',userController.getOneUser)

module.exports = router