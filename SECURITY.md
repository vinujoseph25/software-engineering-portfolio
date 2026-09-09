# Security Policy

## Rules

- Never commit passwords, API keys, OAuth client secrets, JWT secrets, private keys, or local TLS certificates.
- Store local credentials in environment variables or a local `.env` file that is excluded by `.gitignore`.
- Use `.env.example` to document required configuration without real values.
- Rotate any credential that has previously been committed to the repository.

## Historical Credentials

This repository contains historical application code that previously included credentials and private key material. Those values must be treated as compromised and must be rotated or revoked before any production use.

## Reporting

If a security issue is discovered, avoid committing the sensitive value to an issue or pull request. Contact the repository owner privately and provide enough information to reproduce or remediate the issue without exposing the secret.
