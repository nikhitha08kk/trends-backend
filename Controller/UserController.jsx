import ProductModel from "../Model/ProductModel";

module.exports.shopProduct = async (req, res, next) => {
    try {
      const data = await ProductModel.find();
      res.json({
        message: "Product Data fetched",
        status: true,
        shopProduct: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error during product fetching",
        status: false,
      });
    }
  };

  module.exports.productDetails = async (req, res) => {
    try {
      const productId = req.params.id;
      const singleProduct = await ProductModel.findById(productId);
      if (singleProduct) {
        return res.status(200).json({
          message: "success",
          status: true,
          product: singleProduct,
        });
      }
      res.status(404).json({
        message: "Product not found",
        status: false,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
        status: false,
      });
    }
  };
  