const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("./celebrities.routes.js");
router.use("./movies.routes.js");

module.exports = router;
