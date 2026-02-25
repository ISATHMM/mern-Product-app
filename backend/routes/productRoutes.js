const express = require('express')

const router = express.Router()

const ProductController = require('../controllers/productControIIer')



router.get('/', ProductController.getMethod)

router.get('/:id', ProductController.getByIdMethod)

router.post('/', ProductController.postMethod)

router.patch('/:id', ProductController.patchMethod)

router.delete('/:id', ProductController.deleteMethod)

module.exports = router
