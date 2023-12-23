const express=require("express");
var router=express.Router();
const {registerUser, userLogin}=require('../Controller/userController');

router.route('/register').post(registerUser);
router.route('/login').post(userLogin);

module.exports=router;