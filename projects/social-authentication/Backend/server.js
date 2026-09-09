import https from 'https'
import fs from 'fs'
import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import { facebook, google } from './config';

const httpsPort = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET;
const sslKeyPath = process.env.SSL_KEY_PATH;
const sslCertPath = process.env.SSL_CERT_PATH;

if (!sessionSecret || !sslKeyPath || !sslCertPath) {
  throw new Error('SESSION_SECRET, SSL_KEY_PATH and SSL_CERT_PATH must be configured.');
}

const options = {
  key: fs.readFileSync(sslKeyPath, 'utf8'),
  cert: fs.readFileSync(sslCertPath, 'utf8')
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
app.use(cookieSession({
  name: 'session',
  keys: [sessionSecret],
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
  sameSite: 'lax'
}));
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
