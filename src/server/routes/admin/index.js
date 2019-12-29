const router = require('express').Router();
const adminRoutes = require('../../controllers/Admin');
const { register, login, newSacco, saccos, messages } = adminRoutes;

router.post('/register', register);

router.post('/newsacco', newSacco);

router.post('/login', login);

router.post('/saccos', saccos);

router.post("/messages", messages)

module.exports = router;
