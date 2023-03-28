# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by jaypatel31

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

#### Bug 1
The first and highest-priority bug I found while scanning the React app is a hardcoded npmjs registry authtoken in .npmrc. Anyone with access to the file can see and use the token, creating a security vulnerability that may allow unauthorized access to your NPM packages and potentially sensitive data.

#### Solution
To fix this issue, we should remove the authtoken from the .npmrc file and use environment variables or other secure means of authentication instead. We can also consider rotating the security token through CLI and scripting.

#### Bug 2
The second vulnerability is that HSTS was not included in the config file. This can allow users to access the application over HTTP, potentially exposing it to threats like SSL-stripping, man-in-the-middle attacks, and cookie hijacking. 

#### Solution
Add an STS header in the server config file to enable HSTS and redirect all requests over HTTPS: 
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

#### Bug 3
CSP was not enabled, which can open up threats like cross-site scripting and code injections. Without CSP, the browser is not restricted in terms of which resources it can load, or where it can load them from. 

#### Solution
Solution: Add a CSP header to the config file to ensure that only scripts from the same domain as the page are allowed to be loaded: 
```
Content-Security-Policy: default-src 'self';
```

#### Bug 4
The Security.txt file was missing. This file provides security researchers with contact information to report any vulnerabilities found on our website so that we can address them before they are exploited.


#### Bug 5
Another security header, Referrer Policy, was also not defined. This can expose sensitive information, such as tokens if a user navigates from our website to another. 

#### Solution
Adding the header will only allow the referrer header to be shared when the user navigates to our website and not when navigating to a different website.
```
Referrer-Policy: strict-origin 
```
