const path = require('path');
const router = require('express').Router();
const userRoutes = require('./api/user');
const bandRoutes = require('./api/band')

// API Routes
router.use('/api', userRoutes);
router.use('/api', bandRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;