import express from 'express';
import mongoose from "mongoose";
import userRouter from "./routes/pokemon.js"

const db = "mongodb+srv://thomas-o:Templier82@cluster0.fbigf.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const router = express.Router()

app.use(express.urlencoded({extended: true}))
app.use(express.static('assets'));
app.use()
app.use(express.json())
app.use(router)
router.use(userRouter)


app.listen(3000, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("connected to localhost 3000");
    }
})

mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connected to database mongodb (c'est dur....)");
    }
})

app.get("/test", function (req, res) {
    res.render("./test.twig")
   
})


export default router

