const { authController } = require('../authDependency');

const router = require('express').Router();



router.route('/')
  .post(authController.auth);

module.exports.AuthRouter = router;