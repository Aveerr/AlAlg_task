const express = require('express');
const router = express.Router();
const post_calc_controller = require('../controllers/post_calc_controller')

router.post('/',post_calc_controller.post)

module.exports = router