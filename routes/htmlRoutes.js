const router = require('express').Router();
const path = require('path');



// HTML Routes
// GET Route for notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html')) ;
});

// GET Route for homepage as the catch-all route
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;