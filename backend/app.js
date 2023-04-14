require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
//const Routes = require('./routes/index.js');
const passportSetup = require('./middleware/google');
const authRoute = require('./routes/auth');
const catalogRoute = require('./routes/catalog');
const mongoString = process.env.DATABASE_URL;
const cors = require('cors');

//configure mongoose
mongoose.set('strictQuery', false);

// configure app
const app = express();
app.use(express.json());
app.use(
   cors({
      origin: 'http://localhost:3000',
      methods: 'GET,POST,PUT,DELETE',
      credentials: true,
   })
);
app.use(
   cookieSession({
      name: 'session',
      keys: ['lama'],
      maxAge: 24 * 60 * 60 * 100,
   })
);
app.use(passport.initialize());
app.use(passport.session());
const port = process.env.PORT || 3000;

// connect to DB
mongoose.connect(mongoString);
const database = mongoose.connection;
//log error if cannot connect to DB
database.on('error', (error) => {
   console.log(error);
});
//log success if connected to DB
database.once('connected', () => {
   console.log('Database Connected');
});

//routes
app.use('/auth', authRoute);
app.use('/catalog', catalogRoute);

//bug catcher
process.on('uncaughtException', (err, origin) => {
   console.log(
      process.stderr.fd,
      `Caught Exception ${err}\n` + `Exception origin: ${origin}`
   );
});

//listen
app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});

module.exports = app;
