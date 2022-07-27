import { Router } from 'express'
import UserModel from "../models/modelPokemon.js"

const userRouter = Router()

userRouter.get('/users',async (req, res)=>{
    try{
      let users = await UserModel.find()
      res.json(users)  
    }catch (error){
        console.log(error);
    }
})

userRouter.get('/user/:id',async (req, res)=>{
    try{
      let user = await UserModel.findOne({id: req.params.id})
      res.json(user)  
    }catch (error){
        console.log(error);
    }
})

export default userRouter