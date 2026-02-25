const Product = require('../models/Product')





//get all data in json file 
exports.getMethod = async (req, res) => {

    const productList = await Product.find({})
    res.json(productList)
}

//get specific data by id
exports.getByIdMethod = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//add new mongodb
exports.postMethod = async (req, res) => {
    try {
        const body = req.body
        const product = await Product.create(body)
        res.status(201).json({
            message: "product created sucees",
            data: product
        })
    } catch (error) {
        res.status(400).json({
            message: "Error creating product",
            error: error.message
        })
    }
}

//update data
exports.patchMethod = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(updatedProduct)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//delete data
exports.deleteMethod = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json({ message: 'Product deleted successfully' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
