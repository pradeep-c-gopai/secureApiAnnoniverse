const router = require("express").Router();

const { getRoutes } = require('../controller/getQueries');

const { postQuery } = require('../controller/postQueries');

router.get("/getQueries", getRoutes);

router.post("/postQuery", postQuery);

module.exports = router;
