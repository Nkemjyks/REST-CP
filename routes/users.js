const express = require('express')
const router = express.Router()
const User = require('../models/user')

module.exports = router

// GET :  RETURN ALL USERS
router.get('/',async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 
// POST :  ADD A NEW USER TO THE DATABASE 
router.post('/',async (req,res)=>{
    let newUser = req.body
     try {
        await User.create(newUser)
        res.status(200).send('new user saved')
    } catch (error) {
        res.status(500).json({message: error.message})
     }
}) 

// PUT : EDIT A USER BY ID
router.put('/:id', getUser, async (req,res)=>{
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.uname != null){
        res.user.uname = req.body.uname
    }
    if(req.body.pword != null){
        res.user.pword = req.body.pword
    }

    try {
        const updatedUser = await res.user.save()      
        res.json(updatedUser)          
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})  
// DELETE : REMOVE A USER BY ID 
router.delete('/:id', getUser, async (req,res)=>{
    try {
        await res.user.deleteOne()
        res.send("deleted successfully")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}) 

//mware to get user id
async function getUser (req,res,next){
    let user
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: "user not found"})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    res.user = user
    next()
}