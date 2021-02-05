const express = require('express');
const {
  register,
  login,
} = require('../controllers/auth');

const router = express.Router();

const {protect} = require('../middleware/auth');
// Imported this middleware to verify user using the JWT 
// E.g router.post('example', protect, examplecontroller)

router.post('/register', register);
router.post('/login', login);

module.exports = router;