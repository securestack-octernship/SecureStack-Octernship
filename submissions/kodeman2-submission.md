# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### hii i am kolade

### Task submission by Kodeman2

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

i analysed the web application amd found the following issues
##### 1. Index.html file not found
The web application has the ``` index.html ``` file missing and it is a required file.

###### Solution:
Create appropriate file structure to include the ```index.html``` and add it to the web application.

##### 2. Exposed Web Credentials
The web application has exposed credentials in the source code on Github. The credentials are in the ```App.js``` file. The credentials are as follows:

``` const password="v6faF+gC7Zs@?VyCqtEYQ%?S" ```

###### Solution: 
1. The credentials should be stored in a .env file and referenced in the component. This will prevent it from being exposed to the public.
example: 
```const password = process.env.REACT_APP_PASSWORD```
2. Implement encryption: Encrypting web credentials can also help protect them from being exposed.

##### 3. Outdated and missing Dependencies

The web application has outdated react-script, as well as missing web-vitals dependencies. This is a security risk as it allows an attacker to gain access to the web application. The dependencies are as follows:

``` "react-scripts": "3.4.4" ```
``` "web-vitals": "^1.1.2" ```

###### Solution:
1. Update the react-script dependencies to the latest  version available in the documentation
2. Add the missing web-vitals dependencies to the web application.

##### 4. noValidate form attribute
The use of noValidate attribute in login forms may result in incomplete or incorrect user information and security risks.

###### Solution:
1. Remove the noValidate attribute from the login form.

##### 5. User Data is Exposed through the Api

While examining the authentication API https://reqres.in, I discovered that a GET request to /api/users?page=2 exposes user information.

###### Solution:
1. Use a more secure API or OAuth to retrieve user data. Store the API link in the .env file and avoid sharing it publicly.
2. proper authentication and authorization should be implemented to prevent unauthorized access to the API.

##### 6. hardcoded .npmrc authtoken
The .npmrc file contains a hardcoded AuthToken that could potentially be exploited by an attacker to access and manipulate the package registry.

###### Solution:
1. Remove the hardcoded AuthToken from the .npmrc file.
2. Use environment variables to store the AuthToken and reference it in the .npmrc file.

## I therefore proceeded to scan with SecureStack to find more vulnerabilities.
Below are the vunerabilities I found:

##### 1. hsts is not enabled
HSTS (HTTP Strict Transport Security) not enabled means the website is vulnerable to HTTP downgrade attacks. This can be exploited by an attacker to downgrade the connection to HTTP and steal user credentials.

###### Solution:
1. To fix this, the server needs to be configured to enable HSTS header.
```
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

##### 2 csp is not enabled

CSP (Content Security Policy) not enabled means the website is vulnerable to XSS attacks. This can be exploited by an attacker to inject malicious scripts into the website.

###### Solution:
1. To fix this, the server needs to be configured to enable CSP header.
```
Header always set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'"

```

##### 3. Missing security headers, referrer policy  and x-frame-options

The website is missing the following security headers: Referrer-Policy, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, and X-Permitted-Cross-Domain-Policies. This can be exploited by an attacker to steal user credentials.

###### Solution:
1. To fix this, the server needs to be configured to enable the missing security headers.
```
Header always set Referrer-Policy "no-referrer"
Header always set X-Frame-Options "SAMEORIGIN"
```

##### 4. Cross site scripting (XSS) vulnerability

XSS is a vulnerability allowing attackers to inject malicious code.  The impact of an XSS attack can range from a simple nuisance (such as displaying an alert message) to a serious security breach (such as stealing sensitive user data).

###### Solution:
The solution to XSS vulnerability is to implement input validation, output encoding, Content Security Policy (CSP), and HttpOnly cookies to prevent malicious code injection.

##### 5. No security.txt file 
###### Solution: 
Create a plain text file called "security.txt" with the relevant security policy information.
By adding a "security.txt" file to the website, it can demonstrate a commitment to security and provide a clear path for security researchers to report vulnerabilities or issues they may find.

<hr/>

### References
- Cross site scripting reference: https://owasp.org/www-community/attacks/xss/
- HSTS reference: https://owasp.org/www-community/controls/HTTP_Strict_Transport_Security
- CSP reference: https://owasp.org/www-community/controls/Content_Security_Policy
- Referrer-Policy reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
- 