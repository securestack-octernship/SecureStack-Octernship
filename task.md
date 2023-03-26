# Octernship Submission

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

## Possible Solutions

- put dummy token name in .nmprc and put real token in .env file

```
//registry.npmjs.org/:_authToken=$TOKEN
```
- enable hsts as it protects HTTPS web servers from downgrade attacks

- put credential data of .config to .env if repo is public  

- enable csp to prevent XSS attacks

