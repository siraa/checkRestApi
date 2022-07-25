const express = require("express");
const router= express.Router()

const Person = require('../models/user')




//   GET :  RETURN ALL USERS 

router.get('/',(req,res)=>{

    Person.find({},(err,data)=>{
        err ? console.log(err) : res.json(data)
    })
  })


//   POST :  ADD A NEW USER TO THE DATABASE 





// PUT : EDIT A USER BY ID 
router.put('/updateuser/:id',(req,res)=>{

    Person.findByIdAndUpdate({_id:req.params.id},{...req.body} ,(err,msg)=>{

err ? console.log(err) : res.json({msg:' was updated'})
    })
  })



//request Delete

router.delete('/deleteuser/:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})






module.exports=router
