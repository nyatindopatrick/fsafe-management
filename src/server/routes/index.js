const router = require("express").Router();

router.use("/admin", require("./admin"));
router.use("/sacco", require("./sacco"));
router.use("/rider", require("./rider"));

module.exports = router;
