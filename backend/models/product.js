const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    kind: { type: String, required: true },
    color: { type: String, required: true },
    colorCode: { type: String, required: true },
    description: { type: String, required: true },
    fabricSpecifications: { type: String, required: true },
    productInfo1: { type: String, required: true },
    productInfo2: { type: String, required: false },
    productInfo3: { type: String, required: false },
    currentPrice: { type: Number, required: true },
    previousPrice: { type: Number, required: false },
    stock: { type: Number, required: true },
    image1:{ type:String, required:true},
    image2:{ type:String, required:true},
    sizes:{type:[String], required:true},
    isBestSeller:{type:Boolean, required:true},
    skinTones:{type:[String], required:true}
});

module.exports = mongoose.model('Product', productSchema);