# Social Authentication

A React Native authentication project demonstrating third-party OAuth integration with a Node.js backend.

## What it demonstrates

- Social sign-in flows for mobile applications
- Google OAuth 2.0 integration
- Facebook authentication integration
- Passport-based authentication strategies
- Cookie-backed session handling
- Express backend configuration
- Separation of application credentials from source code

## Technology

- React Native
- Node.js
- Express
- Passport
- passport-google-oauth20
- passport-facebook
- cookie-session

## Architecture

The mobile application initiates authentication with the backend. The Express server delegates provider authentication to Passport strategies and maintains the authenticated session.

## Status

Legacy portfolio project. The code is retained as an example of mobile authentication architecture and third-party identity-provider integration.

## Security

Provider credentials and TLS key material are not stored in the current source tree. Configure credentials through environment variables or local configuration when running the project.
