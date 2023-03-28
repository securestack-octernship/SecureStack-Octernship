# SecureStack Octernship Submission
<img src="https://user-images.githubusercontent.com/53075480/213182217-c8ef7bd5-9ffe-4201-9763-c157206a5910.png" width="100">

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

### Task submission by AniketNS

Here are the issues I found in the "Find some bugs!" GitHub Classroom:

1. hsts is not enabled
- If HSTS is not enabled on a website, it means that the website may be vulnerable to attacks that exploit non-secure HTTP connections. 
- This can allow attackers to intercept or modify the website's content, steal user credentials, or perform other malicious activities.
- Enabling HSTS on a website is a recommended security best practice, as it helps to ensure that all communication between the user and the website is encrypted and secure.

### Possible Solution For that is
##Enable HSTS: 
- The most effective mitigation is to enable HSTS on the website. This can be done by adding a response header to the website's HTTP responses that instructs the user's browser to always use HTTPS for future requests.
- Code for that would be
```
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");
```

2. csp is not enabled
- If CSP is not enabled on a website, it means that the website may be vulnerable to XSS attacks, as there is no policy in place to restrict the sources of content that can be loaded on the page.
- Enabling CSP on a website is a recommended security best practice, as it helps to ensure that only trusted sources of content are loaded and executed on the website, reducing the risk of XSS attacks.

## Possible Solution for that is 
## Enable CSP: 
- The most effective mitigation is to enable CSP on the website. This can be done by adding a Content-Security-Policy header to the website's HTTP responses that specifies the sources of content that are allowed to be loaded and executed on the page.
- Code for that would be
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; img-src *; media-src *; style-src 'self' 'unsafe-inline';
```

3. missing security headers
- The absence of these security headers can make the website more vulnerable to attacks, and can also result in lower scores on security benchmarks and assessments.
- It's important to note that missing security headers do not necessarily mean that a website is insecure, but their presence can help to provide an additional layer of protection against common web-based attacks.

##Possible solutions for that is
- Enable Security Headers: The most effective mitigation is to enable the missing security headers on the website. This can be done by adding the relevant HTTP headers to the website's HTTP responses.

### References
- SecureStack : https://app.securestack.com/issues/5123067d-c84e-40db-88c9-ae4d17bc1eb0

 
