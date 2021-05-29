var express = require('express');
var router = express.Router();

const userController = require('../controller/user.controller');
const checkerMiddleware = require('../middlewares/checker.middleware');

const passport = require('passport');


/* GET users listing. */
router.post(
  '/register',
  checkerMiddleware.comparePassword,
  checkerMiddleware.emailChecker,
  userController.register
  );

  router.post('/login', checkerMiddleware.confirmEmail, userController.login)
  router.delete('/logout', userController.logout)


  router.put('/upload_photo', userController.uploadPhoto);
  router.put('/edit_profile', userController.editProfile);

  router.get('/find_all', userController.findAll);
   
   router.get(
     '/find_one',
      checkerMiddleware.checkLogin,
      userController.findOne
      );

module.exports = router;
