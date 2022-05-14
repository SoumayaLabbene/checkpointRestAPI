const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
  deleteAll,
} = require('../controllers/userController')

// GET :  RETURN ALL USERS
router.get('/allUsers', getAllUsers)

//GET : RETURN ONE USER (BY ID)
router.get('/oneUser/:id', getOneUser)

//POST :  ADD A NEW USER TO THE DATABASE
router.post('/addUser', addUser)

//PUT : EDIT A USER BY ID
router.put('/editUser/:id', updateUser)

//DELETE : REMOVE A USER BY ID
router.delete('/deleteUser/:id', deleteUser)

//DELETE : DELETE ALL USERS
router.delete('/deleteAll', deleteAll)

module.exports = router
