const express= require('express');

const router= express.Router();



router.post('/register',regis);
router.post('/login',loginUser);
router.post('/logout',logoutUser);

module.exports=router;