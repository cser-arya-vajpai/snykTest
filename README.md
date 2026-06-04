# Vulnerable Snyk Test Project

This is a simple single-file JavaScript project designed to test **Snyk**'s vulnerability scanning capabilities.

## Vulnerable Dependencies Included
- **lodash@4.17.4**: Has known Prototype Pollution vulnerabilities (e.g., CVE-2018-16487, CVE-2019-10744).
- **minimist@1.2.0**: Has known Prototype Pollution vulnerabilities (e.g., CVE-2020-7598).
- **serialize-javascript@1.9.0**: Has known Cross-Site Scripting (XSS) and Remote Code Execution (RCE) vulnerabilities (e.g., CVE-2019-16769).

## Getting Started

1. Install the dependencies to generate the `node_modules` and lockfile:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```

3. Test with Snyk CLI (if installed globally):
   ```bash
   snyk test
   ```
   Or use the Snyk IDE extension / web interface to scan this directory.
