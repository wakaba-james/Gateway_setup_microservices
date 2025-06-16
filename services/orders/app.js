const  express = require("express")
const app = express()

const PORT = 5001;
//middleware
app.use(express.json())

//simple route
app.get("/orders",(req,res)=>{
    res.send("This is route from order")
})


app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})