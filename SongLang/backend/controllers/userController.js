// This is a placeholder for the actual database logic.
// In a real application, this would interact with the PostgreSQL database.

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock User Data
let users = [];

// @desc    Register a new user
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
        id: users.length + 1,
        username,
        email,
        password: hashedPassword
    };

    users.push(user);

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Authenticate user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

// @desc    Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
    // In a real app, req.user would be set by the 'protect' middleware
    res.json({ message: "User profile data placeholder." });
});


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
};
