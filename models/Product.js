// using mongoose
import mongoose from 'mongoose';

// connect to mongoDb
// 'mongodb://localhost:27017/DooProject'
const connectionString = 'mongodb://127.0.0.1:27017/DooProject';

// Wait for database to connect, logging an error if there is a problem 
async function connectMongoDb() {
    try 
    {
        await mongoose.connect(connectionString);
        console.log('MongoDb connected');
    }           
    catch(error) 
    {
        console.log(error);
    }
};

await connectMongoDb();

// Create model Schema
const productSchema = mongoose.Schema({
    // _id : String,
    ProductName : String,
    ProductDescription: String,
    ProductType : String
},
{ 
    versionKey: false, 
    collection:'Product'
});

// Create model
const Product = mongoose.model('Product', productSchema);

export default Product;
