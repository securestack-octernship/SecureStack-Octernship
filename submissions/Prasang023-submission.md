# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

## Task submission by Prasang023

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

### **Bugs and Vulnerabilites found using SecureStack Platform**

I found 5 Exposure Vulnerabilities and 72 Code Vulnerabilities using SecureStack Platform some of which are listed below:

**1. Hsts is not enabled**

    The web application does not use HTTP Strict Transport Security (HSTS). HSTS is a web security policy mechanism that helps to protect websites against man-in-the-middle attacks such as protocol downgrade attacks and cookie hijacking. It allows web servers to declare that web browsers (or other complying user agents) should automatically interact with it using only HTTPS connections, which provide Transport Layer Security (TLS/SSL), unlike the insecure HTTP used alone.

**Solution:**

Add this to header in Server's Response:

```Strict-Transport-Security: max-age=31536000```

**2. Csp is not enabled**

    The web application does not include any Content Security Policy (CSP). CSP is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.

**Solution:**

Add ```Content-Security-Policy``` as ```default-src``` in a meta tag in header of index.html file.

**3. Security.txt file Missing**

    Website doesn't contains the security.txt file. The security.txt file is a simple text file that website owners can create and place in the root directory of the website. The main purpose of security.txt is to help make things easier for companies and security researchers when trying to secure platforms.

**Solution:**

Create a security.txt file for the website, and placing it in the root directory of application. In this file, website's security policies and provide contact information for security researchers to report any vulnerabilities or bugs they may find. Standardized format is outlined in the securitytxt.org specification, which provides guidance on the content and structure of the security.txt file. By creating a security.txt file and following best practices, the security of website can be maintained and users are protected from potential harms.

**4. Missing referrer policy**

    The web application does not implement a referrer policy. Referrer-Policy is a security header that can (and should) be included on communication from website's server to a client. The Referrer-Policy tells the web-browser how to handle referrer information that is sent to websites when a user clicks a link that leads to another page or website.

**Solution:**

To set a referrer policy, add the Referrer-Policy header to server's HTTP response. Developer needs to choose a referrer policy and set it as the value of header. For instance, if "strict-origin-when-cross-origin" policy is needed to be applied, the following code needs to be added to the Referrer-Policy header to your server's HTTP response:

```Referrer-Policy: strict-origin-when-cross-origin```

By adding this header to server's HTTP response, you can specify how much information is shared in the HTTP Referer header when users navigate between pages on your site or click on links that lead to other sites. This helps to protect users' privacy and security while they are using your website.

**5. Missing security headers**

    HTTP security headers are a fundamental part of website security. Upon implementation, they protect you against the types of attacks that your site is most likely to come across. These headers protect against XSS, code injection, clickjacking, etc. This article explains most commonly used HTTP headers in context to application security.

**Solution:**

Add Security headers to server's HTTP response. Some of the common security headers are:
1. Content-Security-Policy (CSP)
2. Strict-Transport-Security (HSTS)
3. X-XSS-Protection
4. X-Frame-Options

### **Some Bugs and Vulnerabilites found directly in the Code**

**1. Code Structure**

    main index.html and the public folder is missing. React Application is a single page application in which everything renders in the main index.html file and this file is generally stored in public folder in react code structure.

**Solution:**

Creating ```index.html``` file containing a div html element with ```id="root"``` 

**2. Hardcoded password in src\App.js file**

    Password is hardcoded in src\App.js file. Anyone with access to the code can easily acquire the password, which can lead to unauthorized access to sensitive information.

**Solution:**

Using ```dotenv``` package and creating a .env file and storing the environment variable ```PASSWORD=v6faF+gC7Zs@?```. The password can then be accessed in App.js as ```process.env.PASSWORD```

**3. ```npm start``` command is not working because of outdated version of react-scripts and missing web-vitals package**

    react-scripts and web-vitals are the required packages to run a react app which are either outdated or missing

**Solution:**

Use command:

```npm install react-scripts@latest web-vitals```

**4. Exposed AWS credentials in app.config**

    AWS credentials are exposed in the app.config file which can be accessed by anyone who have the access to the code.

**Solution:**

Use dotenv package and store all the sensitive credentials in the ```.env``` file. variables declared in .env file can be accessed by following command ```process.env.<VARIABLE_NAME>```. Create a ```.gitignore``` file which contains ```node_modules``` and ```.env``` so that they are not pushed to the github and credentials are hidden.

### References
- HSTS: https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
- Csp: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- Security.txt file: https://securitytxt.org/
- Refferrer Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
- Security headers: https://www.loginradius.com/blog/engineering/http-security-headers/
- dotenv package: https://www.npmjs.com/package/dotenv
