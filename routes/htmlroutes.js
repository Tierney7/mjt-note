//tells the server what page to navigate to depending on the URL endpoints
const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
//defining end points
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All other routes respond with the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
