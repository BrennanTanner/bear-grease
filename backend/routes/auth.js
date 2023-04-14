const Auth = require('express').Router();
const passport = require("passport");

Auth.get('/login/success', (req, res) => {
   if(req.user){
      res.status(200).json(
         {
            user: req.user,
            cookies: req.cookies,
            //or jwt?
         }
      );
   }
});

Auth.get('/login/failed', (req, res) => {
   res.status(401).json({
      message: 'failed to authenticate',
   });
});

Auth.get('/logout', (req, res) => {
   res.logout();
   res.redirect('http://localhost:3000');
});

Auth.get("/google", passport.authenticate("google", { scope: ["profile"] }));

Auth.get('/google/callback', passport.authenticate('google', {
   successRedirect: 'http://localhost:3000',
   failureRedirect: '/login/failed',
}));

module.exports = Auth;