const path = require('path');
const router = require('express').Router()

//index router
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//notes router
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//export router
module.exports = router