// Load the required libraries
const express = require('express');
const User = require('./models/User'); // Make sure the User model is in the models directory
const router = express.Router();

// POST route for Sign-In
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            // If user does not exist
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        // Check if the password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Successful login
        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
