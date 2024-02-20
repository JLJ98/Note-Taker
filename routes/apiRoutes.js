const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package to generate unique ids
const db = require('../db/db.json');

// API Routes
// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading the notes database' });
    }
    res.json(JSON.parse(data));
  });
});

// POST Route for saving a new note
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4() };
    db.push(newNote);
  fs.writeFile('db/db.json', JSON.stringify(db), (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading the notes database' });
    }
    res.json(db);
  });
});
module.exports = router;