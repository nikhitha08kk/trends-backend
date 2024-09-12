// import ProductModel from "../Model/ProductModel";


// module.exports.productList=async (req,res,next)=>{

//     try{
//       const data=await ProductModel.find();
  
//       res.status(200).json({
//         message: "Products fetched",
//         status: true,
//         productList: data,
//       });
//     }
//     catch (error) {
//       console.log(error);
//       res.status(500).json({
//         message: "Internal server error during product fetching",
//         status: false,
//       });
//     }
//   };

//   module.exports.AddProducts= async (req, res) => {
//     try {
//       const { prod_name, price, description, image, category } = req.body;
  
//       // Create a new product instance
//       const products = new ProductModel({
//         prod_name:prod_name ,price:price, description:description,image: image,category:category
//       });
//       // Save the product to the database
//       await products.save();
  
//       // Send a success response
//       res.status(200).json({ message: "Product added successfully" });
//     } catch (error) {
//       // Handle any errors that occur during the process
//       res.status(400).json({ error: error.message });
//     }
//   };

//   module.exports.getProductById = async (req, res) => {
//     try {
//       const productId = req.params.id;
  
//       const product = await ProductModel.findById(productId);
//       if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
//       res.status(200).json(product);
//     } catch (error) {
//       console.log(error)
//       res.status(500).json({ message: error.message });
//     }
//   };

//   module.exports.editProduct = async (req, res) => {
//     try{
//       const product = await ProductModel.findById(req.params.id);
//       if(!product){
//         return res.status(404).json({ message: "Product not found "});
//       }
  
//       Object.assign(product, req.body);
  
//       const updatedProduct = await product.save();
//       res.status(200).json(updatedProduct);
//     } catch(error) {
//       res.status(400).json({ message: error.message});
//     }
//   };

  
// module.exports.deleteProduct = async (req, res) => {
//     try {
//       const { productId } = req.params;
//       await ProductModel.findByIdAndDelete(productId);
//       res.status(200).json({ message: "Product removed successfully", status: true });
//     } catch (error) {
//       console.error("Error removing user:", error);
//       res.status(500).json({ message: "Internal server error", status: false });
//     }
//   };