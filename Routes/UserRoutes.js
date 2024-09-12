// const express = require('express');
// const router = express.Router();
// const {shopProduct,productDetails}=require("../Controller/UserController");
// router.get('/shop/:id', productDetails);
// router.get('/shop', shopProduct)
// module.exports = router;
const express = require('express');
const { productList } = require('../Controller/UserController');
const router = express.Router();
router.get("/product",productList)
// Define your routes here
router.get('/example', (req, res) => {
    res.send('Example route');
});

// Export the router
module.exports = router;