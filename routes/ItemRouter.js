const itemController= require('../controllers/itemController')

const router=require('express').Router()

router.post('/',itemController.addItem)
router.delete('/:id',itemController.deleteItem)
router.patch('/:id',itemController.updateItem)

module.exports = router