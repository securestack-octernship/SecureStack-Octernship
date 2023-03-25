# Octernship Task SecureStack

##  Vulnerabilities Detected in the Project

###  1. Hardcoded .npmrc AuthToken
**Issue:**
 The `.npmrc` file is used to configure settings for the `npm` package manager, including authentication tokens. Hardcoding an authentication token in this file can create a security vulnerability because it can be easily accessed by anyone who has access to the project's code.

**Solution:**
Set an environment variable to store the authentication token.
Removing Private Key from `.npmrc` to `.env` file

### 2. HSTS is Not Enabled
**Issue:**
HTTP Strict Transport Security (HSTS) is a security mechanism that helps to protect against man-in-the-middle attacks and other security vulnerabilities. When HSTS is enabled, a website's server sends a header to the user's browser telling it to always use HTTPS when communicating with the server.

**Solution:**
enable HSTS in your project

Adding `Strict-Transport-Security` to the header 

### 3. No security.txt file

**Issue:**
It provides a way for websites to define security policies,
It help organizations describe their vulnerability disclosure practices to make it easier for researchers to report vulnerabilities.

**Solution:**
Providing `security.txt` in root directory which will help organization to report vulnerabilities

### 4. Exposed Account Access

**Issue:** 
Aws Access is exposed to the the public which is an extreme vulnerable for the website security 

**Solution**
Personal Account access and passwords should be stored in `.env` file in order to prevent access to the public

### 5.  CSP Not enabled

### 6 . Missing security headers & referrer policy

