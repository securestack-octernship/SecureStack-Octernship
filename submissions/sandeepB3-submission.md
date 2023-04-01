# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by sandeepB3

*Here are the issues I found in the "Find some bugs!" GitHub Classroom:*

---

### Bugs & Vulnerabilities found by me
```http
https://github.com/SecureStackCo/app.cheapcryptobank.com
```
(These are the bugs and vulnerabilities I have found by thoroughly going through the code base)

### 1. Missing public directory and index.html - Bug
ss1

**Solution:**
- Create the public directory with index.html file in it.
- Create a div element inside the body tag and assign id="root"

ss2

### 2. Latest dependency installations - Bug
**React app requires node module installation, updating react-scripts to the latest version, and installing web-vitals package.**

**Solution:**

```bash
  npm install
  npm install react-scripts@latest web-vitals
  npm start
```

**Working React App at localhost:3000**

ss3

### 3. Source Code - Bugs/Vulnerabilities 
- **Non-Validated attribute in Form**
- **Missing alt attribute in image tags**
- **Exposed Source Map**

### 4. Exposed Credentials - Security Vulnerabilities
- **Hardcoding password in src/App.js** 
```bash
const password="v6faF+gC7Zs@?VyCqtEYQ%?S"
```
**Solution:**
Creating an .env file and storing the environment variable ```PASSWORD=v6faF+gC7Zs@?```. The password can then be accessed in App.js using :
```bash
const password = process.env.PASSWORD
```
---
- **Hardcoded .npmrc AuthToken** 
Accessible token creates security risk for NPM packages and sensitive data.

**Solution:**
Set an environment variable ```NPM_TOKEN``` to store the authentication token. Storing the variable to ```.env``` file. The key can then be accessed in .npmrc using :
```bash
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```
---
- **Exposed AWS credentials in app.config**
Storing AWS credentials in app.config exposes a security vulnerability, allowing unauthorized access to AWS resources by anyone with code access.

**Solution:**
Similar to the above solutions set environment variables to store the authentication tokens and access them using the environment variables

---
**Create the ```.env``` file and do the needful. Also create the ```.gitignore``` file and store .env along with all the other files which when exposed can be critical to security.**

ss4

ss5

### Additional Bugs & Vulnerabilities found using SecureStack
```http
https://app.securestack.com/
```

### 1. HSTS is not enabled
- HSTS is a web security mechanism that defends websites against attacks like protocol downgrade and cookie hijacking. 
- By declaring that web browsers should only use HTTPS connections, it guarantees secure Transport Layer Security (TLS/SSL) communication, as opposed to insecure HTTP.

**Solution:**
To solve this issue we have to add the following header to our server's response:
```bash
Strict-Transport-Security: max-age=31536000
```

### 2. CSP is not enabled
- CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. 
- These attacks are used for everything from data theft to site defacement to distribution of malware.

**Solution:**
Add this snippet of code in our main index.html file
```bash
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

### 3. No security.txt file
The purpose of the security.txt file is to furnish security researchers with a means to report any website vulnerabilities they may come across, allowing website owners to address these issues before they can be abused.

**Solution:**
Create ```"security.txt"``` in the public directory.
Include the necessary information such as the contact email for security researchers to report vulnerabilities.
In your app's "package.json" file, add the following line:
```bash
"homepage": "https://yourwebsite.com"
```

### 4. Missing referrer policy
- Referrer-Policy is a security header that can (and should) be included on communication from your website's server to a client. 
- The Referrer-Policy tells the web-browser how to handle referrer information that is sent to websites when a user clicks a link that leads to another page or website.

**Solution:**
Add this snippet of code in our main index.html file
```bash
<meta name="Referrer-Policy" value="no-referrer | same-origin"/>
```

## References
- **HTTP Strict-Transport-Security (HSTS)** - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
- **Content Security Policy (CSP)** - https://owasp.org/www-project-secure-headers/#content-security-policy-csp
- **Security txt File** - https://securitytxt.org/
- **Refer Policy** - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy

## Conclusion
Studying the codebase thoroughly as well as using SecureStack I was able to understand and recognise the Bugs & Vulnerabilities involved in the app. 

### Code Exposure:
**1. High Vulnerability**
- Security Vulnerabilities - .npmrc AuthToken, Exposed AWS credentials, passwords
- HSTS not enabled

**2. Medium Vulnerability**
- CSP not enabled	
- Detect
- Invalidated Form
- Exposed source map

**3. Low Vulnerability**
- No security.txt file
- Missing referrer policy
- Missing security headers

### Code Vulnerabilities:
Discovered 72 vulnerabilities within the source code of a web application using the SecureStack tool, with 13 of them being critical. These vulnerabilities arose primarily from the use of various third-party packages during the app's development.

---
**Web application vulnerabilities can arise from a variety of factors, including inadequate adherence to best practices during development and deployment, as well as human errors. Most important thing is to always secure vulnerable keys and prevent unauthorized access.**