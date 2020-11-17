const router = require('express').Router();
let Entry = require('../models/weight-tracker-entries.model');

router.route('/').get((req, res) => {
    Entry.find()
    .then(entries => res.json(entries)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const weight = req.body.weight;
    const date = req.body.date;

    const newEntry = new Entry({
        weight,
        date,
        });

    newEntry.save()
    .then(() => res.json('New Entry Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;