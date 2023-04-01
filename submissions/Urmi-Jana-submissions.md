
# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by Urmi-Jana

Here are the issues I found in the CheapCryptoApp application from examining the source code and also running it through the SecureStack platform:

#### 1. Exposed sensitive information (Password, AuthToken, AWS Key, Admin mail and password).

&nbsp;(a) The .npmrc file contains the following exposed Authentication Token for the npm registry. 
```
//registry.npmjs.org/:_authToken=99e9d43e-bb9b-11ed-afa1-0242ac120002

```
&nbsp;(b) The app.config contains the exposed admin email and password along with AWS Authentication Tokens.
```
username: admin@cheapcryptobank.com
password: Password123!

export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
```
&nbsp;(c) The App.js file in the src directory contains the following exposed password. 
```
const password="v6faF+gC7Zs@?VyCqtEYQ%?S"
```

&emsp; Leaving such information in an Open Source code can external user can access it freely and exploit it.

&emsp; Solution: Create a .env file to store all related AuthToken and admin information by storing them in specific variables. Install the dotenv npm package and import it where required by using the _**process.env.[variable name]**_ command


#### 2. Open API that is not secure
#### 3. HSTS header missing

The application is missing the HSTS headers that would enable it to use the secure HTTPS Protocol. In case of being abset, it leads to 
#### 4. CSP not available 

### References
- Cross site scripting reference: https://owasp.org/www-community/attacks/xss/
- Vm2 CVE-2021-23555: https://www.cvedetails.com/cve/CVE-2021-23555/ 


![image](https://user-images.githubusercontent.com/75936174/229139029-6e83649c-a7b7-48ae-aad0-a9b433ad265c.png)
