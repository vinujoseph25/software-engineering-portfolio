import https from 'https'
import fs from 'fs'
import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import { facebook, google } from './config';

const httpsPort = process.env.PORT || 3000;
const options = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8'),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8')
};

const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});

const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile._json.picture
});

passport.use(new FacebookStrategy(facebook,
  async (accessToken, refreshToken, profile, done)
    => { return done(null, transformFacebookProfile(profile._json)) }
));

passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done)
    => { return done(null, transformGoogleProfile(profile)) }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const app = express();
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

https.createServer(options, app).listen(httpsPort, () => {
  console.log(">> Localhost listening at port " + httpsPort);
});
