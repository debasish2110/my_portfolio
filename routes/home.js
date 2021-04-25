const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/home');

router.get('/', homePageController.homePage);

 router.post('/sendMail', homePageController.sendMail);

module.exports = router;
