const express = require('express')
const router = express.Router()

/* Home route */

router.get('/', (req, res, next) => {
  res.render("home")
})

module.exports = router;

