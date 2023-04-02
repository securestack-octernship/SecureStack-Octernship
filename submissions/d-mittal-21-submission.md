# Octernship Submission

<a href="https://securestack.com" target=”_blank” rel="noopener noreferrer"><center><img src="https://securestack.com/wp-content/uploads/2021/09/securestack-horizontal.png" width="400"/></center></a>

## Task submission by d-mittal-21

I used nmap, burp suite and securestack platform for this task.
there is a cross-site fetch request
18.67.111.67 using AWS
104.26.11.213 using Cloudfare

## vulnerabilities found

- hardcoded .npmrc authtoken
  
- hsts is not enabled

- .config file visible

- cross-site scripting

- constant defined in code (App.js)

- no security.txt file

- missing security headers

- services leaking data

- bootstrap 4.2.0 (not a direct vulnerable)

## Possible Solutions

- put dummy token name in .nmprc and put real token in .env file

```
//registry.npmjs.org/:_authToken=$TOKEN
```
- enable hsts as it protects HTTPS web servers from downgrade attacks

- put credential data of .config to .env if repo is public  

- enable csp to prevent XSS attacks


## References

- Cross-site scripting : https://owasp.org/www-community/attacks/xss/

- react-dev-utils vulnerable: https://github.com/facebook/create-react-app/issues/10411

- Cloudfare: https://blog.detectify.com/2019/07/31/bypassing-cloudflare-waf-with-the-origin-server-ip-address/
