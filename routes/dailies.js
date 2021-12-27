const express = require("express");
const router = express.Router();
  
const Dailies = require("../models/Dailies");
 

// @route POST dailies 
// @desc Save dailies
// @access Public
router.post("/store", (req, res) => {
    const dailiesList = new Dailies({
        name: req.body.name,
        dailies:req.body.dailies
    });
 
    dailiesList
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));

});

module.exports = router;