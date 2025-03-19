const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/usuarios", userRoutes);

module.exports = router;