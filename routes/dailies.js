const express = require("express");
const router = express.Router();

const Dailies = require("../models/Dailies");


// @route POST dailies 
// @desc Save dailies
// @access Public
router.post("/store", (req, res) => {
    const dailiesList = new Dailies({
        date: req.body.date,
        userId: req.body.userId,
        dailies: req.body.dailies
    });

    dailiesList
        .save()
        .then(list => res.json(list))
        .catch(err => console.log(err));

});

// @route POST dailies 
// @desc Read dailies
// @access Public
router.post("/read", (req, res) => {
    const date = req.body.date;
    const userId = req.body.userId;

    Dailies.findOne({ date, userId }).then(dailies => {

        if (!dailies) {
            return res.status(404).json({ Notfound: "Not found" });
        }

        console.log(dailies);
    });

});

module.exports = router;