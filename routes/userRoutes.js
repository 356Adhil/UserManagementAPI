const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Retrieve a list of all users
router.get('/users', userController.getUsers);

// Retrieve details of a specific user
router.get('/users/:userId', userController.getUserById);

// Update an existing user
router.put('/users/:userId', userController.updateUser);

// Create a new user
router.post('/users', userController.createUser);

// Update specific fields of an existing user
router.patch('/users/:userId', userController.updateUserFields);

// Delete an existing user
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
