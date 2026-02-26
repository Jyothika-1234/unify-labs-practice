const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    tags: [String],
    featured: Boolean
});

const Product = mongoose.model('Product', productSchema);

// --- PROJECT REQUIREMENTS ---

// 1. Mass Updates: Increase Electronics price by +10 using $inc
async function updateElectronicsPrice() {
    const result = await Product.updateMany(
        { category: 'Electronics' }, 
        { $inc: { price: 10 } }
    );
    console.log(`${result.modifiedCount} electronics updated.`);
}

// 2. Set 'featured: true' for items priced > 500
async function featureExpensiveItems() {
    await Product.updateMany(
        { price: { $gt: 500 } }, 
        { $set: { featured: true } }
    );
}

// 3. Use $push to add 'new-arrival' tag to specific items
async function addNewArrivalTag(productId) {
    await Product.updateOne(
        { _id: productId },
        { $push: { tags: 'new-arrival' } }
    );
}

// 4. Cleanup: Delete items with zero stock
async function clearZeroStock() {
    const result = await Product.deleteMany({ stock: 0 });
    console.log(`${result.deletedCount} items cleared.`);
}
