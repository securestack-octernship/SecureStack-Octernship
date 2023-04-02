# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

<hr/>

## Task submission by mukulpadwal

Hi, @6mile I am mukul padwal
Here are the issues I found in the "Find some bugs!" GitHub Classroom:

<hr/>

## Project Related Bugs/Vulnerabilities
(These Changes are made in the local codebase which i cloned earlier so the screenshots are of that)

### 1. We have to setup few folders and file structures in order to run our application on our local machine. For eg. the src folder, the public folder, the index.html file which we can find from the codebase which you have provided the link to.


![vul1](https://user-images.githubusercontent.com/80583870/227718519-33d4165b-22e3-4cbf-84c2-23b64d659a42.png) 
![vul2](https://user-images.githubusercontent.com/80583870/227718637-22c246f0-8e0a-4f7e-9e6b-c26b52494e45.png)

### 2. the npm start command was not running because of outdated version of `react-scripts`


![vul3](https://user-images.githubusercontent.com/80583870/227718656-0a3cc981-f365-48e6-af14-766f360f8ec5.png)

#### We can solve it with this command

```
# 👇️ if you use npm
npm install react-scripts@latest

# 👇️ if you use yarn
yarn add react-scripts@latest
```

### 3. We also need to install this package `web-vitals`

![vul4](https://user-images.githubusercontent.com/80583870/227718749-d00c71cf-ed25-4314-8901-ebcabca84274.png)

**After all these steps our app will be able to run successfully on our localhost**

![app](https://user-images.githubusercontent.com/80583870/227718819-353b40e7-2ef7-4a7a-b36c-659d0b1b4044.png)

<hr/>

## Security Related Vulnerabilities

### 1. there is no `.gitignore` file and the sensitive data like `private api keys` are publicly visible & available that could be used by hackers.
So first we can create a git ignore file in which we can mention all the files that we don't want to get uploaded on github repo that will be available to everyone.

**We could add these files in our .gitignore file**

![vul5](https://user-images.githubusercontent.com/80583870/227718989-4046ddc7-8f2a-43b5-b4dc-efa60772f93c.png)

**for the Security keys we can store them in environment variables and access using `process.env.YOUR_KEY_NAME`**

![vul6](https://user-images.githubusercontent.com/80583870/227719059-7a372593-ee15-4e4a-808e-e2b3af6a217a.png)

### 2. In our login component inside the form tag we have set it as noValidate which we need to change that.

![vul7](https://user-images.githubusercontent.com/80583870/227719495-833dac90-810e-403c-be83-2b13dac24ec3.png)

### 3. In App.js file the password is exposed publicly we can call it through environment variables

![vul10](https://user-images.githubusercontent.com/80583870/227764940-36d88f77-4a7b-48f9-b812-109d20435ffb.png)

<hr />

### After using Securestack tool it listed few more vulnerabilities which can be considered of high priority to solve

**missing security headers** 

I used https://securityheaders.com/ to scan the missing headers and this was the result
![Screenshot 2023-03-27 192500](https://user-images.githubusercontent.com/80583870/227960445-1abf190c-9e62-46cb-9d52-40f3fc6be0f5.png)

1. **Hsts is not enabled**

To solve this issue in the .htaccess file we have to write the following code
```
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

2. **Csp is not enabled**


To solve this the easiest way is to mention this snippet of code in our main index.html file
```
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

3. **hardcoded .npmrc authtoken**

4. **no security.txt file** : We can create this file from https://securitytxt.org/ website and include in our website.

5. **Missing referrer policy**

There are various ways to solve this
```
In a response header:
Referrer-Policy: no-referrer | same-origin | origin | strict-origin | no-origin-when-downgrading 

In a META tag
<meta name="Referrer-Policy" value="no-referrer | same-origin"/>

In an element attribute
<a href="https://app.cheapcryptobank.com" rel="noreferrer"></a> 
or
<a href="https://app.cheapcryptobank.com" referrerpolicy="no-referrer | same-origin | origin | strict-origin | no-origin-when-downgrading"></a>
```

<hr />

### References
- HTTP Strict-Transport-Security(HSTS) : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security, https://support.cloudways.com/en/articles/5129574-how-to-enable-http-strict-transport-security-hsts-policy

- Content Security Policy : https://content-security-policy.com/

- Security File : https://securitytxt.org/

- Referrer Policy : https://www.blackhillsinfosec.com/fix-missing-referrer-policy-website/, https://www.invicti.com/web-vulnerability-scanner/vulnerabilities/referrer-policy-not-implemented/
