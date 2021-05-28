const router = require('express').Router();
const bandRoute = require("./band");
router.use('/band', bandRoute);

module.exports = router;