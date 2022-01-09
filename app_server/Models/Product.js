const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		image: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			unique: true,
		},
		eachPrice: {
			type: String,
			required: true,
		},
		packing: {
			type: String,
		},
		price: {
			type: String,
			required: true,
		},
		brand: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Brands",
			required: true,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Categories",
			required: true,
		},
	},
	{ timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
