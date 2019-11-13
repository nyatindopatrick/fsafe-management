const router = require('express').Router();
const saccoRoutes = require('../../controllers/Sacco');
const { sacco } = saccoRoutes;
router.get('/', sacco);
module.exports = router;
