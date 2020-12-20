// root file 

// require gets access to express library
const express = require('express'); 
// generates new express application
const passport = require('passport');
//passport js google auth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();
// referenced with authenticate()
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done)=>{
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    }
));

//google route
// authenticate using the google passport strategy
app.get( '/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // add contacts possibly for contacts
}));

app.get('/auth/google/callback',
    passport.authenticate('google')
);


app.get('/', (req,res) =>{
    res.send({naz: "wriight"});
});
// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// host name 
// https://cryptic-plateau-14392.herokuapp.com/
// git repo deployment target 
// https://git.heroku.com/cryptic-plateau-14392.git

