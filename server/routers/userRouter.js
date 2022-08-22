const express = require('express')
const userRouter = express.Router()
const { findAllUser, createUser, deleteUser } = require('./../controllers/user.controller')


userRouter.get('/user/test', (req, res) => {
    res.send(JSON.stringify({ success: true }))
})

userRouter.post('/user', createUser)
userRouter.get('/users', findAllUser)

userRouter.delete('/user/:id', deleteUser)


module.exports = userRouter