const express = require('express');
const router = express.Router();
const { getSongs, getSongById } = require('../controllers/songController');

// @route   GET /api/songs
// @desc    Get all songs (with optional filters)
// @access  Public
router.get('/', getSongs);

// @route   GET /api/songs/:id
// @desc    Get a single song by its ID
// @access  Public
router.get('/:id', getSongById);

module.exports = router;
