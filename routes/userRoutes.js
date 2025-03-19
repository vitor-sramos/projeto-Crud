const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/usuarios", userController.getUser);

module.exports = router;