const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required...'],
        trim: true //munkun pinuukku space vita atha etukkathu
    },
    status: {
        type: String,
        enum: ["created", "updated"],
        default: "created"
    },

    price: {
    type: Number,
    required: true,
    min: 0,
    max: 300
},
    qty: {
    type: Number,
    required: true,
    min: 0,
    default: 0
},
    available: {
    type: Boolean,
},
    createdAt: {
    type: Date,
    default: Date.now
},
    ratings: {
    type: [Number],
    default: []
}
})

module.exports = mongoose.model('Product', ProductSchema);