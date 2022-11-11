const express = require('express');
const controller = require("../controller/Cuser");
const router = express.Router();

router.get('/', controller.main);
router.get('/signup', controller.getSignup);

router.post('/signup', controller.postSignup);
router.get('/signin', controller.getSignin);
router.post('/signin', controller.postSignin);

router.post('/profile', controller.postProfile);
router.post('/profile/edit', controller.postProfileEdit);
router.post('/profile/delete', controller.postProfileDelete);

module.exports = router;