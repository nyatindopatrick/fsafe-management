const router = require('express').Router();
const adminRoutes = require('../../controllers/Admin');
const { register, login } = adminRoutes;

router.post('/register', register);

router.post('/login', login);

module.exports = router;
