const express = require("express")
const app = express()
const connection = require("./Config/db")

const productRoutes = require("./Routes/product.routes")
app.use(express.json())

const PORT = 8000


app.use("/products", productRoutes )
app.get("/",(req,res)=>{

     res.status(200).send("Home Page")
})


// app.listen(PORT, async()=>{

//      await connection()
//       console.log("Welcome to server")
// })


const startServer = async () => {
    try {
        await connection();  // Ensure DB is connected first
        app.listen(PORT, () => {
            console.log("Welcome to server");
        });
    } catch (err) {
        console.error("DB connection failed:", err);
        process.exit(1);  // Exit the app if DB is dead
    }
};

startServer();