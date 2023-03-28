# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by zigbee-s

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

1. Hardcoded password in src\App.js file (Security Vulnerability): A hardcoded password has been found in the code. This is a significant security vulnerability as anyone with access to the code can obtain the password, which can lead to unauthorized access to sensitive information.

2. Missing package web-vitals: A required package web-vitals is missing from the code, which can cause issues with web performance measurement.

**Solution:**
Add the package to package.json

3. Novalidate attribute in login form: The noValidate attribute is set in the login form, which can lead to the submission of incomplete or incorrect user information, as well as potential security vulnerabilities.

**Solution:**
Remove the noValidate argument

4. Exposed AWS credentials in app.config (Security Vulnerability): AWS credentials are stored in app.config, which is a configuration file that can be accessed by anyone with access to the code. This is a significant security vulnerability as it allows an attacker to use these credentials to gain unauthorized access to AWS resources.

**Solution:**
Use environment variables or a .env file for for storing and retrieving sensitive information. You can access these variables in ypur code using: `process.env.REACT_APP_VARIABLE_NAME` [Note: Ensure that you don't commit your .env file by adding it to the .gitignore]

5. Hardcoded .npmrc AuthToken: An AuthToken has been hardcoded in the .npmrc file, which can allow an attacker to access and modify the package registry using the same credentials.

**Solution:**
Use environment variables or a .env file for for storing and retrieving sensitive information. You can access these variables in ypur code using: `process.env.REACT_APP_VARIABLE_NAME` [Note: Ensure that you don't commit your .env file by adding it to the .gitignore]

6. HSTS downgrade possible (Security Vulnerability): The code does not enforce HTTP Strict Transport Security (HSTS) headers, which can allow an attacker to downgrade a secure connection to an insecure connection and perform a man-in-the-middle attack.

**Solution:**
Add the following header to your server's response:
```
Strict-Transport-Security: max-age=<expire-time>
```

7. csp is not enabled (Security Vulnerability): Content Security Policy (CSP) is not enabled, which can allow an attacker to execute malicious scripts on the website or steal user information using Cross-Site Scripting (XSS) attacks.

**Solution:**
Add  Content-Security-Policy header to the website's HTTP responses 
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; img-src *; media-src *; style-src 'self' 'unsafe-inline';
```

8. X-Frame-Options (XFO) header not implemented: The code does not implement the X-Frame-Options (XFO) header, which can allow an attacker to perform Clickjacking attacks and potentially hijack the user's session.
**Solution:**
Add X-Frame-options header in the react.js response headers

### References

- OWASP. (2022). Content Security Policy (CSP). Retrieved from https://owasp.org/www-project-secure-headers/#content-security-policy-csp
- OWASP. (2022). Clickjacking Defense Cheat Sheet. Retrieved from https://owasp.org/www-project-cheat-sheets/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html
- OWASP. (2022). HTTP Strict Transport Security (HSTS). Retrieved from https://owasp.org/www-project-secure-headers/#http-strict-transport-security-hsts
- OWASP. (2022). X-Frame-Options (XFO). Retrieved from https://owasp.org/www-project-secure-headers/#x-frame-options-xfo
