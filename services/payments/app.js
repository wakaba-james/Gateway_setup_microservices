const  express = require("express")
const app = express()
//Port
const PORT = 5002;


//middleware
app.use(express.json())

//simple route
app.get("/payments",(req,res)=>{
    res.send("Fetched payments"); 
})

app.listen(PORT,()=>{
    console.log(`The server is running in port ${PORT}`)
})