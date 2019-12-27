const router = require('express').Router();
const adminRoutes = require('../../controllers/Admin');
const { register, login, newSacco, saccos } = adminRoutes;

router.post('/register', register);

router.post('/newsacco', newSacco);

router.post('/login', login);

router.post('/saccos', saccos);

module.exports = router;
