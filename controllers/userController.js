const UserModel = require('../models/userModel');

// Get all users
const getUsers = async (req, res) => {
  try {
    const userList = await UserModel.find({}).select('-password');
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};


// Get user by id
const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};

// Update user by id
const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json({ message: 'User created successfully', userDetails: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const updateUserFields = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// Export all functions
module.exports = {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  updateUserFields,
  deleteUser,
};
