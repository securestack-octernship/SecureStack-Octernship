
# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by Urmi-Jana

Here are the issues I found in the CheapCryptoApp application from examining the source code and also running it through the SecureStack platform:

### 1. Exposed sensitive information (Password, AuthToken, AWS Key, Admin mail and password).

&emsp;(a) The .npmrc file contains the following exposed Authentication Token for the npm registry. 
`
//registry.npmjs.org/:_authToken=99e9d43e-bb9b-11ed-afa1-0242ac120002
`

&nbsp;(b) The app.config contains the exposed admin email and password along with AWS Authentication Tokens.
```
username: admin@cheapcryptobank.com
password: Password123!

export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
```
&nbsp;(c) The App.js file in the src directory contains the following exposed password. 
`
const password="v6faF+gC7Zs@?VyCqtEYQ%?S"
`

&emsp;Leaving such information in an Open Source code can external user can access it freely and exploit it.

&emsp;Solution steps: 
- Create a .env file to store all related AuthToken and admin information by storing them in specific variables.
- Install the dotenv npm package and import it where required by using the _**process.env.[variable name]**_ command.
- Create a **.gitignore** file and add **.env** file along with all the other files which when exposed can be critical to security to ensure that the passwords are not uploaded to the public repo.

### 2. HSTS header missing

- The application is missing the HSTS headers that would enable it to use the secure HTTPS Protocol.
- In case of being absent, it leads to an HTTP version of the site, which may allow attackers to carry out a Man-in-the-Middle Attack, allow them to intercept user requests and forward users to a clone website or perform cookie hijacking by intercepting user session cookies.

&emsp;Solution: Add the following header to the server's response:
```
Strict-Transport-Security: max-age=31536000
```
### 3. Missing public directory and index.html file
- The public folder with the main HTML entry point is missing.
- The public folder with the index.html file is required as it enables us to include a HTML template containing our headers, page title, imported libraries and essential scripts.

&emsp;Soution:
- Create a public directory in the root directory
- Create the **index.html** file and add required HTML code

### 4. CSP not available 
- Content Security Policy (CSP) is an extra layer of security that detects and protects against attacks like Cross site scripting and data injection.
- Absence of CSP will enable attackers to insert malicious data or capture and filter user data by manipulating website failure.

&emsp; Solution: Add the code snippet to the index.html file. This HTTP response header will instruct the browser to apply the policies specified.
```
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

### References
- Public directory in React: https://create-react-app.dev/docs/using-the-public-folder/#:~:text=The%20public%20folder%20is%20useful,outside%20of%20the%20bundled%20code.
- Using CSP: https://www.invicti.com/web-vulnerability-scanner/vulnerabilities/content-security-policy-csp-not-implemented/
- HSTS headers: https://kinsta.com/knowledgebase/hsts-missing-from-https-server/#:~:text=Sometimes%2C%20an%20IT%20security%20scan,as%20a%20medium%2Drisk%20vulnerability.
