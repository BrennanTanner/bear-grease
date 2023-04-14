const passport = require('passport');
const User = require('../models/UserModel.js');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
   new GoogleStrategy(
      {
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      async function (accessToken, refreshToken, profile, cb) {
         response = await User.findOneAndUpdate(
            { googleId: profile.id },
            {
               username: profile.displayName,
               googleId: profile.id,
               avatar: profile.photos[0].value,
            },
            { new: true, upsert: true }
         );
         return response;
      }
   )
);

passport.serializeUser((user, cb) => {
   cb(err, user);
});

passport.deserializeUser((user, cb) => {
   cb(err, user);
});
