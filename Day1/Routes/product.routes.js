
const express = require("express")
const router = express.Router()

const {getProduct,addProduct, updateProduct, deleteProduct} = require("../Controller/product.controller")

router.get("/", getProduct)
router.post("/",addProduct)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports = router