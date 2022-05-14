const user = require('../models/User')

exports.addUser = async (req, res) => {
  try {
    const findUser = await user.findOne({ email: req.body.email })
    if (findUser) {
      return res.status(400).send({ msg: 'email already exists' })
    }
    const newUser = new user(req.body)

    await newUser.save()
    res.status(200).send({ msg: 'User added successfully', newUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOneUser = async (req, res) => {
  try {
    const id = req.params.id
    user.findById(id).then((user) => res.status(200).send(user))
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find()
    res.status(200).send(allUsers)
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updateUser = async (req, res) => {
  try {
    const editedUser = await user.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'User edited successfully', editedUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    user.findByIdAndDelete(id).then((user) => res.send(user))
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteAll = async (req, res) => {
  try {
    user.deleteMany().then((user) => res.send(user))
  } catch (err) {
    res.status(500).send(err)
  }
}
