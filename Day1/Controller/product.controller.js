const Prod = require("../Model/product.model")

const getProduct= async(req,res)=>{
 
    const products = await Prod.find()

    res.json(products)


}


const addProduct = async(req,res)=>{

    const newProd =  new Prod( req.body)
   const createdProd=  await newProd.save()
   res.status(201).json(createdProd)

}

const updateProduct =async(req,res)=>{
    const payload = req.body
    let product = await Prod.findByIdAndUpdate(req.params.id,payload)

      product = await Prod.findById(req.params.id)
     res.send(product)
}

const deleteProduct = async(req,res)=>{
    await Prod.findByIdAndDelete(req.params.id)
    res.status(200).json("note has been deleted")
}

module.exports={getProduct,addProduct,updateProduct,deleteProduct}