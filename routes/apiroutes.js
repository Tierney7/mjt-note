const router = require('express').Router();
const queries = require('../db/queries');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  queries
    .get()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  queries
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;